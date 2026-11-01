#!/usr/bin/env node
// Render the /repositories/ GitHub cards to static SVGs at build time, so the page
// does not depend on a public card service being up. Reads the same settings the
// card templates use: _data/repositories.yml and repo_theme_light/dark in _config.yml.
//
// Usage: CARDS_DEPS=<dir whose node_modules has @stats-organization/github-readme-stats-core
//        and js-yaml> PAT_1=<GitHub token> node bin/github-cards.mjs
// Output: assets/img/github-cards/{user-<name>,repo-<owner>-<repo>}-{light,dark}.svg
// A card that fails to render is skipped; its template then falls back to the live service.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const deps = createRequire(path.join(process.env.CARDS_DEPS || root, "package.json"));
const load = async (name) => import(pathToFileURL(deps.resolve(name)).href);

const core = await load("@stats-organization/github-readme-stats-core");
const yaml = (await load("js-yaml")).default;

const config = yaml.load(await readFile(path.join(root, "_config.yml"), "utf8"));
const data = yaml.load(await readFile(path.join(root, "_data/repositories.yml"), "utf8")) || {};

const users = data.github_users || [];
const repos = data.github_repos || [];
const lines = String(data.repo_description_lines_max || 2);
const locale = String(config.lang || "en").split("-")[0];
const themes = { light: config.repo_theme_light || "default", dark: config.repo_theme_dark || "dark" };

const outDir = path.join(root, "assets/img/github-cards");
await mkdir(outDir, { recursive: true });

let failed = 0;
const render = async (handler, query, file) => {
  const result = await handler(query);
  if (String(result?.status).startsWith("error") || !result?.content) {
    failed++;
    console.warn(`skipped ${file}: ${result?.error?.message ?? result?.status ?? "empty output"}`);
    return;
  }
  await writeFile(path.join(outDir, file), result.content, "utf8");
  console.log(`wrote ${file}`);
};

for (const [mode, theme] of Object.entries(themes)) {
  for (const username of users) {
    await render(
      core.api,
      { username, theme, locale, show_icons: "true", hide_rank: "true" },
      `user-${username}-${mode}.svg`,
    );
  }
  for (const fullName of repos) {
    const [owner, repo] = fullName.split("/");
    await render(
      core.pin,
      { username: owner, repo, theme, locale, show_owner: String(!users.includes(owner)), description_lines_count: lines },
      `repo-${owner}-${repo}-${mode}.svg`,
    );
  }
}

if (failed) process.exitCode = 1;
