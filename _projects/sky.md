---
layout: page
title: "Numerical Linear Algebra Software in the AI Era: Present and Future"
description: "Companion page for our poster at the Sky Computing Lab End-of-Project meeting (UC Berkeley, October 21, 2026)."
img: assets/img/sky-ring-thumb.png
importance: 0
category: presentations
related_publications: false
_styles: >
  @import url("https://fonts.googleapis.com/css2?family=Sora:wght@700&family=DM+Sans:wght@400;700&display=swap");
  .sky-diagram { background: #ffffff; border: 1px solid #d9d9d9; border-radius: 12px;
    padding: 10px; overflow-x: auto; }
  .sky-diagram svg { display: block; min-width: 520px; max-width: 760px; width: 100%; height: auto; margin: 0 auto; }
  .sky-svg text { pointer-events: none; }
  .sky-svg a rect, .sky-svg a circle { transition: filter 0.12s ease, stroke-width 0.12s ease; }
  .sky-svg a:hover rect, .sky-svg a:focus rect, .sky-svg a:hover circle, .sky-svg a:focus circle { filter: brightness(0.94); stroke-width: 5; }
  .sky-index ul { columns: 2; column-gap: 2.5rem; padding-left: 1.2rem; }
  .sky-index li { margin-bottom: 0.3rem; break-inside: avoid; }
  .sky-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0 1.5rem; }
  .sky-card { border-radius: 12px; padding: 14px 16px; }
  .sky-card.build { background: #e4f0f8; border-left: 6px solid #0072B2; }
  .sky-card.trust { background: #fbe9dc; border-left: 6px solid #D55E00; }
  .sky-card h3 { margin: 0 0 0.4rem; font-size: 1.15rem; }
  .sky-card ul { padding-left: 1.1rem; margin: 0; }
  .sky-card li { margin-bottom: 0.3rem; }
  .sky-poster { background: #ffffff; border: 1px solid #d9d9d9; border-radius: 12px; padding: 10px; margin-top: 1rem; }
  .sky-poster img { width: 100%; height: auto; display: block; }
  .sky-sources li { margin-bottom: 0.5rem; }
  .sky-credit { color: var(--global-text-color-light); font-size: 0.85rem; margin-top: 1.5rem; }
---

<p>
  This page accompanies our poster at the
  <a href="https://sky.cs.berkeley.edu/" target="_blank" rel="noopener"><b>Sky Computing Lab</b></a>
  End-of-Project meeting at UC Berkeley (October 21, 2026). The poster has two halves. The left
  half is about <b>RandBLAS and RandLAPACK</b>, our open-source libraries for randomized
  numerical linear algebra. The right half is about <b>VERITAS</b>, a proposed framework for
  testing and certifying numerical linear algebra kernels, and its companion formalization
  project <b>VSCL</b>. The figure below is the poster's centerpiece: <b>every box is a link</b>,
  and everything else the poster points to follows underneath.
</p>

<div class="sky-diagram">
<svg class="sky-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" role="img" aria-label="Poster centerpiece: a ring whose blue left half is RandBLAS and RandLAPACK (sketch, compute, deliver) and whose orange right half is VERITAS (recognize, test, certify), joined at the centre by the kernel contract"><defs>
      <marker id="la" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0072B2"/></marker>
      <marker id="lb" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto"><path d="M0 0L10 5L0 10z" fill="#D55E00"/></marker>
    </defs><path d="M8 56 L8 8 L56 8" fill="none" stroke="#BBBBBB" stroke-width="4" stroke-linecap="round"/><path d="M992 56 L992 8 L944 8" fill="none" stroke="#BBBBBB" stroke-width="4" stroke-linecap="round"/><path d="M8 944 L8 992 L56 992" fill="none" stroke="#BBBBBB" stroke-width="4" stroke-linecap="round"/><path d="M992 944 L992 992 L944 992" fill="none" stroke="#BBBBBB" stroke-width="4" stroke-linecap="round"/><path d="M454.1 866.8 A330 330 0 0 1 454.1 213.2" fill="none" stroke="#9CC6E2" stroke-width="74" stroke-linecap="butt" opacity="0.55"/><path d="M454.1 866.8 A330 330 0 0 1 454.1 213.2" fill="none" stroke="#0072B2" stroke-width="54" stroke-linecap="butt"/><path d="M545.9 213.2 A330 330 0 0 1 545.9 866.8" fill="none" stroke="#F0B388" stroke-width="74" stroke-linecap="butt" opacity="0.55"/><path d="M545.9 213.2 A330 330 0 0 1 545.9 866.8" fill="none" stroke="#D55E00" stroke-width="54" stroke-linecap="butt"/><path d="M325.1 676.7 A222 222 0 0 1 636.7 365.1" fill="none" stroke="#9CC6E2" stroke-width="32" stroke-linecap="butt"/><path d="M674.9 403.3 A222 222 0 0 1 363.3 714.9" fill="none" stroke="#F0B388" stroke-width="32" stroke-linecap="butt"/><a href="#contract" aria-label="The contract: what a kernel promises and what it assumes"><title>The contract: what a kernel promises and what it assumes</title><circle cx="500" cy="540" r="162" fill="#EEF1F5" stroke="#D9DDE2" stroke-width="6"/><text x="500.0" y="514.0" font-size="26" fill="#1A1A1A" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" letter-spacing="2.5">THE CONTRACT</text><text x="500.0" y="556.0" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >what a kernel promises</text><text x="500.0" y="588.0" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >and what it assumes</text></a><a href="#randnla" aria-label="RandBLAS and RandLAPACK"><title>RandBLAS and RandLAPACK</title><text x="262.9" y="60.0" font-size="25" fill="#0072B2" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" >RandBLAS &amp; RandLAPACK</text></a><text x="50.0" y="92.0" font-size="23" fill="#4F4F4F" font-weight="normal" text-anchor="start" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >delivers high-performance implementations</text><text x="50.0" y="121.9" font-size="23" fill="#4F4F4F" font-weight="normal" text-anchor="start" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >of novel NLA kernels</text><a href="#veritas" aria-label="VERITAS"><title>VERITAS</title><text x="797.1" y="60.0" font-size="25" fill="#D55E00" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" >VERITAS</text></a><text x="950.0" y="92.0" font-size="23" fill="#4F4F4F" font-weight="normal" text-anchor="end" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >accepts a black-box NLA kernel</text><text x="950.0" y="121.9" font-size="23" fill="#4F4F4F" font-weight="normal" text-anchor="end" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >and checks its reliability</text><a href="https://github.com/BallisticLA/RandBLAS" target="_blank" rel="noopener" aria-label="RandBLAS on GitHub: sketching operators behind a BLAS-style API"><title>RandBLAS on GitHub: sketching operators behind a BLAS-style API</title><rect x="101" y="253" width="332" height="108" rx="8" fill="#FFFFFF" stroke="#0072B2" stroke-width="5"/><text x="266.7" y="289.7" font-size="27" fill="#1A1A1A" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" letter-spacing="2">SKETCH</text><text x="266.7" y="319.7" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >RandBLAS compresses the</text><text x="266.7" y="348.3" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >input, preserving its features</text></a><a href="https://github.com/BallisticLA/RandLAPACK" target="_blank" rel="noopener" aria-label="RandLAPACK on GitHub: fast NLA kernel computations"><title>RandLAPACK on GitHub: fast NLA kernel computations</title><rect x="4" y="486" width="332" height="108" rx="8" fill="#FFFFFF" stroke="#0072B2" stroke-width="5"/><text x="170.0" y="523.0" font-size="27" fill="#1A1A1A" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" letter-spacing="2">COMPUTE</text><text x="170.0" y="553.0" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >RandLAPACK performs fast</text><text x="170.0" y="581.6" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >NLA kernel computations</text></a><a href="#install" aria-label="Delivering the libraries: languages, GPUs, vendor BLAS and LAPACK, releases"><title>Delivering the libraries: languages, GPUs, vendor BLAS and LAPACK, releases</title><rect x="101" y="719" width="332" height="108" rx="8" fill="#FFFFFF" stroke="#0072B2" stroke-width="5"/><text x="266.7" y="756.3" font-size="27" fill="#1A1A1A" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" letter-spacing="2">DELIVER</text><text x="266.7" y="786.3" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >in C++, MATLAB, Python;</text><text x="266.7" y="814.9" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >on CPUs and NVIDIA GPUs</text></a><a href="#veritas" aria-label="VERITAS: recognizing which archetype a kernel implements"><title>VERITAS: recognizing which archetype a kernel implements</title><rect x="567" y="253" width="332" height="108" rx="8" fill="#FFFFFF" stroke="#D55E00" stroke-width="5"/><text x="733.3" y="289.7" font-size="27" fill="#1A1A1A" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" letter-spacing="2">RECOGNIZE</text><text x="733.3" y="319.7" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >which archetype is the kernel?</text><text x="733.3" y="348.3" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >a model and probe runs decide</text></a><a href="#veritas" aria-label="VERITAS: adversarial tests against the archetype's contract"><title>VERITAS: adversarial tests against the archetype's contract</title><rect x="664" y="486" width="332" height="108" rx="8" fill="#FFFFFF" stroke="#D55E00" stroke-width="5"/><text x="830.0" y="523.0" font-size="27" fill="#1A1A1A" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" letter-spacing="2">TEST</text><text x="830.0" y="553.0" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >bounds, hardware assumptions,</text><text x="830.0" y="581.6" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >exceptions, numerical precision</text></a><a href="#veritas" aria-label="VERITAS: a signed certificate with provenance and a trust grade"><title>VERITAS: a signed certificate with provenance and a trust grade</title><rect x="567" y="719" width="332" height="108" rx="8" fill="#FFFFFF" stroke="#D55E00" stroke-width="5"/><text x="733.3" y="756.3" font-size="27" fill="#1A1A1A" font-weight="bold" text-anchor="middle" font-family="Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif" letter-spacing="2">CERTIFY</text><text x="733.3" y="786.3" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >issue a certificate</text><text x="733.3" y="814.9" font-size="22" fill="#4F4F4F" font-weight="normal" text-anchor="middle" font-family="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" >with a trust grade</text></a></svg>
</div>

<h2 id="index">All links from the poster</h2>
<div class="sky-index">
  <ul>
    <li><b>RandBLAS</b>: <a href="https://github.com/BallisticLA/RandBLAS" target="_blank" rel="noopener">GitHub</a>, <a href="https://randblas.readthedocs.io/en/latest/" target="_blank" rel="noopener">documentation</a>, <a href="https://github.com/BallisticLA/RandBLAS/releases/tag/1.1.0" target="_blank" rel="noopener">release 1.1.0</a></li>
    <li><b>RandLAPACK</b>: <a href="https://github.com/BallisticLA/RandLAPACK" target="_blank" rel="noopener">GitHub</a>, <a href="https://github.com/BallisticLA/RandLAPACK/blob/main/INSTALL.md" target="_blank" rel="noopener">one-command install of both libraries</a>, <a href="https://discord.gg/R4qj8Er9YW" target="_blank" rel="noopener">Discord</a></li>
    <li><b>MATLAB and Python bindings</b>: <a href="https://github.com/BallisticLA/randlapack-bindings" target="_blank" rel="noopener">randlapack-bindings</a></li>
    <li><b>VSCL</b>: <a href="https://github.com/VSCL-x-VERITAS/lean-computational-mathematics" target="_blank" rel="noopener">the Lean 4 library</a></li>
    <li><b>Sources</b> [1] to [47]: <a href="#sources">listed below</a></li>
    <li><b>Related work</b>: <a href="https://arxiv.org/abs/2609.12307" target="_blank" rel="noopener">How to grade the accuracy of the BLAS</a> [5] and its <a href="https://github.com/Reference-LAPACK/grading-the-BLAS" target="_blank" rel="noopener">test code</a></li>
    <li><b>The poster</b>: <a href="/assets/pdf/sky-poster-2026-10-21.pdf" target="_blank" rel="noopener">PDF, 48 x 36 in</a> (<a href="#poster">preview</a>)</li>
  </ul>
</div>

<h2 id="randnla">RandBLAS and RandLAPACK</h2>
<p>
  Randomized numerical linear algebra (RandNLA) [3] brings two decades of theoretical computer
  science to matrix computations, using randomness for speed and robustness. A sketching operator
  compresses the input problem into a much smaller one that preserves its features (norms, angles,
  leading subspaces) with high probability, so the expensive step of an algorithm runs on the small
  problem. <b>RandBLAS</b> implements the sketching operators, dense and sparse (including
  CountSketch-type [28] and LESS-type [29] operators), using a BLAS-style API, built to become a
  vendor-implemented standard like the BLAS; every random number comes from a counter-based
  generator [8], so draws are reproducible whatever the thread count. <b>RandLAPACK</b> implements,
  tests and benchmarks RandNLA methods, novel and known, on top of it: low-rank approximation
  (RSVD [20], RBKI [46]), symmetric eigenvalue and positive semidefinite approximation (REVD2 [37],
  RPCholesky [21], Nystr&ouml;m [3]), QR with column pivoting (BQRRP [1], CQRRPT [2], HQRRP [22]),
  tall and Q-less QR (CQRRTO [9] and shifted Cholesky QR3 [23]; the Q-less analysis also covers
  Cholesky QR2 [27]), least squares and kernel ridge regression (KRILL [24], Blendenpik [25],
  LSQR [26]), and matrix functions and traces (funNystr&ouml;m++ [7], Lanczos [47]).
</p>
<p>
  <b>The AI tasks column</b> of the poster's table names an AI task that relies on each family's
  computation; none of these systems runs RandLAPACK's own code. Low-rank approximation: SVD-based
  compression and fine-tuning of large language models, where randomized SVD already runs in
  practice (<a href="https://arxiv.org/abs/2404.02948" target="_blank" rel="noopener">PiSSA</a>,
  <a href="https://arxiv.org/abs/2504.20437" target="_blank" rel="noopener">GaLore 2</a>). Symmetric
  eigenvalue and PSD approximation: kernel PCA and spectral clustering
  (<a href="https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html" target="_blank" rel="noopener">scikit-learn's randomized kernel PCA</a> [32]).
  QR with pivoting: structured pruning by interpolative decomposition
  (<a href="https://arxiv.org/abs/2108.00065" target="_blank" rel="noopener">Chee et al.</a>).
  Tall and Q-less QR: distributed optimizers
  (<a href="https://arxiv.org/abs/2504.05295" target="_blank" rel="noopener">Dion</a>, whose reference
  implementation defaults to a randomized Cholesky QR). Least squares and regression: kernel ridge
  regression [24]. Matrix functions and traces: Gaussian-process likelihoods by stochastic Lanczos
  quadrature (<a href="https://arxiv.org/abs/1809.11165" target="_blank" rel="noopener">GPyTorch</a>)
  and Hessian spectra of neural networks
  (<a href="https://arxiv.org/abs/1912.07145" target="_blank" rel="noopener">PyHessian</a>).
</p>
<p>
  <b>The numbers on the poster.</b> The 100x and 55% tiles and the chart come from the BQRRP
  paper's benchmark data [1]: a dual AMD Zen4c CPU against LAPACK's pivoted QR, and an NVIDIA
  H100 against cuSOLVER's unpivoted QR. The 10x tile is our funNystr&ouml;m++ condition-number
  sweep [7], at condition number 10<sup>7</sup>. The 1700x tile is from our June 2025 RandLAPACK
  report: RPCholesky [21] in RandLAPACK against scikit-learn's [32] kernel PCA on the codrna dataset
  (RBF kernel, bandwidth 3, eigenvector identities verified to 1e-8; RandLAPACK with p = 4 against
  scikit-learn with p = 2 as in the source slide) at 100,000 points on an Apple M2 Max.
</p>

<h2 id="install">Delivering the libraries</h2>
<div class="sky-grid">
  <div class="sky-card build">
    <h3>C++ at the core</h3>
    <ul>
      <li><a href="https://github.com/BallisticLA/randlapack-bindings" target="_blank" rel="noopener">MATLAB and Python bindings</a>: MATLAB covers BQRRP, with funNystr&ouml;m++ in an open pull request; Python is a BQRRP proof of concept.</li>
      <li><b>GPUs</b>: RandLAPACK has CUDA support (BQRRP and CQRRPT on NVIDIA GPUs); RandBLAS CUDA support is in development.</li>
    </ul>
  </div>
  <div class="sky-card build">
    <h3>Vendor BLAS and LAPACK</h3>
    <ul>
      <li>Through <a href="https://github.com/icl-utk-edu/blaspp" target="_blank" rel="noopener">BLAS++</a> and <a href="https://github.com/icl-utk-edu/lapackpp" target="_blank" rel="noopener">LAPACK++</a> [34]: tested with OpenBLAS [38], Intel MKL [39], Apple Accelerate [40] and AMD AOCL [41] (BLIS [35] and libflame [36]).</li>
      <li>The wrappers also support Cray LibSci [42] and IBM ESSL [43].</li>
    </ul>
  </div>
  <div class="sky-card build">
    <h3>Release</h3>
    <ul>
      <li>RandBLAS <a href="https://github.com/BallisticLA/RandBLAS/releases/tag/1.1.0" target="_blank" rel="noopener">1.1.0</a> is available now; RandLAPACK's 1.0 release candidate follows in November 2026.</li>
      <li>One-command installers on Linux, macOS and Windows: <a href="https://github.com/BallisticLA/RandLAPACK/blob/main/INSTALL.md" target="_blank" rel="noopener">INSTALL.md</a> (installs RandBLAS as well). Questions: the <a href="https://discord.gg/R4qj8Er9YW" target="_blank" rel="noopener">RandLAPACK Discord server</a>.</li>
    </ul>
  </div>
</div>

<h2 id="contract">The contract</h2>
<p>
  The centre of the ring names what the two halves share. A kernel's <b>contract</b> is what
  it promises (an error bound, a success probability, its behaviour on exceptions) and what it
  assumes (the arithmetic and its precision, the hardware and the BLAS beneath it, the inputs).
  The libraries on the left deliver kernels; VERITAS tests a kernel against its contract; VSCL
  proves the bounds the contracts cite.
</p>

<h2 id="veritas">VERITAS</h2>
<p>
  VERITAS (Verification Engine for Reliable and Intelligent Testing of Algebra Systems) is a
  <b>proposed</b> framework for testing and certifying numerical kernels, whoever or whatever
  wrote them. For over fifty years, experts have built the standardized libraries of numerical
  linear algebra (NLA) that science runs on; we continue that tradition with next-generation NLA
  software. Meanwhile, by 2026 generative AI has entered development pipelines, bringing ambitious
  new kernels to NLA, and new reliability risks. Trust can no longer rest on authorship, so
  verification matters more than ever: we intend to build the means to trust kernels.
</p>
<p>
  <b>The motivation</b> is the audit shown on the poster. In round 2 of a 2026 GPU fast-QR
  competition [4], the top five kernels run 87x to 107x faster than cuSOLVER (the organizers'
  reference) and pass all 19 scored cases; on 1,050 legal inputs from the organizers' own
  generator, run through the unchanged checker, every one of them returns wrong factorizations
  (157, 46, 330, 3 and 360 times). The rank-4 kernel fails only 3 times because it detects hard
  inputs and falls back to an exact routine. Counting round 1, 10 of 10 top kernels break. In the
  Cholesky factorization [44] and eigendecomposition [45] follow-ups, 7 of 10 are broken; two of
  the rest hold only because they fall back to an exact method, and the last fails only in long
  input sequences. The adversarial testing harness behind those audits exists today; everything
  else below is proposed.
</p>
<p>
  <b>The proposed design</b> has five stages over one archetype catalog. A kernel comes in as C++
  or Python source code, whoever or whatever wrote it. A model names the archetype it implements
  and writes the adapter; trial runs confirm the archetype; adversarial tests check
  precision-aware error bounds and exception handling, with secret seeds, mixed inputs and
  adversarial search so that the tests resist gaming; a signed certificate records provenance and
  a trust grade. The catalog starts with 28 archetypes (BLAS 1 to 3, LAPACK factorizations and
  solvers, sparse kernels). Each states what a kernel must compute, on which inputs, and to what
  accuracy: an error bound (proved in VSCL [6] where the library covers it), a pass tolerance and
  input generators. Failing cases refine the catalog.
</p>
<p>
  Related: the accuracy grades of the BLAS [5]; the
  <a href="https://arxiv.org/abs/2207.09281" target="_blank" rel="noopener">proposed consistent exception handling for the BLAS and LAPACK</a>;
  and the IEEE P3109 [31] draft standard for low-precision arithmetic.
</p>

<h2 id="vscl">VSCL</h2>
<p>
  The Verified Scientific Computing Library (VSCL) [6] puts numerical analysis in Lean 4 [33]; its
  formalized results are the basis of VERITAS tests. On its main branch (2026-10-09) it holds 1.4
  million lines of Lean code on top of Mathlib [19] and 43,858 theorem and lemma lines, with no
  sorry or admit. 27,321 of those lines are numerical linear algebra, against 104 in all of
  Mathlib, none of which concern rounding error; the source notes for [6] and [19] give the
  counting rules.
</p>
<p>
  <b>Texts.</b> Formalized: all 28 chapters of Higham [10]. In progress: LeVeque [11] (chapters 1
  to 3 done), Vershynin [12] (chapters 1 and 2 done), the Drineas and Mahoney RandNLA case study
  [13], Nocedal and Wright [14], Bhatia [15]. Next: Greenbaum [16], Saad [17], Boyd [18].
  <b>How it is built:</b> a book-formalization skill drives coding agents chapter by chapter
  (extract, inventory, prove in Lean 4, audit faithfulness, publish). <b>Next targets:</b> error
  bounds for IEEE P3109 [31] low-precision reductions; LU and QR on BLAS of a known accuracy
  grade [5]; the MR&sup3;-based SVD [30].
</p>
<p>
  <b>The benchmark on the poster</b>: 60 fixed Lean proof targets from 54 numerical-analysis
  papers, each proved three times with and without the library by the same agent (GPT-6 Sol at
  extra-high reasoning effort; internal report, 20 October 2026). With the library, mean proof
  time fell from 407 to 279 seconds (46 percent faster), complete Lean code from 344 to 243 lines
  (29 percent less) and net-new tokens from 84k to 74k (11 percent fewer). The gains concentrate
  in the 30 tasks chosen to match library results; on the other 30, time is about the same.
</p>

<h2 id="poster">The poster</h2>
<div class="sky-poster">
  <a href="/assets/pdf/sky-poster-2026-10-21.pdf" target="_blank" rel="noopener">
    <img src="/assets/img/sky-poster-preview.png" alt="Poster: Numerical Linear Algebra Software in the AI Era, Present and Future. Left: RandBLAS and RandLAPACK. Centre: the thesis, a ring diagram joining the two halves through the kernel contract, and result tiles. Right: VERITAS and VSCL."/>
  </a>
</div>
<p style="margin-top: 0.6rem;">
  <a href="/assets/pdf/sky-poster-2026-10-21.pdf" target="_blank" rel="noopener"><b>Download the poster (PDF, 48 x 36 in)</b></a>
</p>

<h2 id="sources">Sources</h2>
<p>
  Numbers match the markers on the poster. Entries [5], [27] to [31], [35], [36] and [42] to [45]
  are cited on this page only.
</p>
<ol class="sky-sources">
  <li id="s1">M. Melnichenko, R. J. Murray, W. Killian, J. Demmel, M. W. Mahoney, P. Luszczek, M. Gates. <a href="https://arxiv.org/abs/2507.00976" target="_blank" rel="noopener">Anatomy of High-Performance Column-Pivoted QR Decomposition</a> (BQRRP), arXiv:2507.00976, 2025. The poster's chart plots our raw data from the paper's benchmark campaign: a dual AMD EPYC 9734 (Zen4c) at n = 64,000 (best of three runs per block size; the paper reports best of five) and an NVIDIA H100 at n = 32,768 (block sizes 32 to 2048, one run each); in that sweep BQRRP reaches 55 percent of cuSOLVER's unpivoted QR rate on the H100 at block size 2048, still rising; the paper's abstract reports about 65 percent at its own settings.</li>
  <li id="s2">M. Melnichenko, O. Balabanov, R. J. Murray, J. Demmel, M. W. Mahoney, P. Luszczek. <a href="https://arxiv.org/abs/2311.08316" target="_blank" rel="noopener">CholeskyQR with Randomization and Pivoting for Tall Matrices</a> (CQRRPT), arXiv:2311.08316, 2023. Cited for the CQRRPT row of the methods table.</li>
  <li id="s3">R. Murray et al. <a href="https://arxiv.org/abs/2302.11474" target="_blank" rel="noopener">Randomized Numerical Linear Algebra: A Perspective on the Field With an Eye to Software</a>, arXiv:2302.11474, 2023. The monograph behind RandBLAS and RandLAPACK.</li>
  <li id="s4">GPU MODE fast-QR competition, 2026: <a href="https://www.gpumode.com/leaderboard/774" target="_blank" rel="noopener">round 2</a> (leaderboard 774, the poster's table) and <a href="https://www.gpumode.com/leaderboard/773" target="_blank" rel="noopener">round 1</a> (773). Submissions were run unmodified through the organizers' own checkers on a B200. The speedups on the poster divide the leaderboard time of a plain torch.geqrf entry (130.4 ms, cuSOLVER one matrix at a time) by each top-5 kernel's leaderboard time (1.22 to 1.50 ms).</li>
  <li id="s5">J. Demmel, G. Henry, I. Kozachenko, J. Langou, X. S. Li, J. Riedy, J. Vanover. <a href="https://arxiv.org/abs/2609.12307" target="_blank" rel="noopener">How to grade the accuracy of the BLAS</a>, arXiv:2609.12307, 2026; test code at <a href="https://github.com/Reference-LAPACK/grading-the-BLAS" target="_blank" rel="noopener">Reference-LAPACK/grading-the-BLAS</a>. Grades A, B and C are componentwise, row- and column-scaled, and normwise error bounds.</li>
  <li id="s6"><a href="https://github.com/VSCL-x-VERITAS/lean-computational-mathematics" target="_blank" rel="noopener">VSCL: the Lean 4 computational-mathematics library</a>. Counted on the main branch at commit e821e55 (2026-10-09): 1,390,174 lines of Lean code in the library, comments and blank lines excluded (the README's own figure, 1,576,743 nonblank lines, includes comments); 43,858 theorem and lemma lines, with the theorem/lemma-line regex of the Mathlib count [19]; no sorry or admit, and no axioms declared in the library (proofs rely on the three standard axioms Mathlib assumes, and six also use native_decide). The numerical-linear-algebra subset (27,321 lines) covers Higham chapters 3, 7 to 23 and 28, the matrix-algorithm, perturbation, conditioning and test-matrix modules, and the Drineas-Mahoney RandNLA module. An earlier figure of 40,478 theorems could not be reproduced.</li>
  <li id="s7">funNystr&ouml;m++ (accelerated funNystr&ouml;m++ for spectral sums tr f(A): log-determinants, statistical dimension and related quantities of large positive semidefinite matrices), manuscript 2026, implementation in RandLAPACK. The poster's tile is from our condition-number sweep for tr &radic;A at 1 percent relative error: at condition number 10<sup>7</sup> funNystr&ouml;m++ needed 9.4x fewer matrix-vector products than Girard-Hutchinson, 9.9x fewer than Persson and 7.9x fewer than XNysTrace (medians over 50 trials); the tile quotes the Girard-Hutchinson and Persson comparisons, rounded. The method's complexity bound, &Otilde;(&radic;&kappa; + &kappa;<sup>1/4</sup>/&epsilon;) matrix-vector products against the usual &Otilde;(&radic;&kappa;/&epsilon;), is what makes the gap grow with the condition number.</li>
  <li id="s8">J. K. Salmon, M. A. Moraes, R. O. Dror, D. E. Shaw. <a href="https://doi.org/10.1145/2063384.2063405" target="_blank" rel="noopener">Parallel random numbers: as easy as 1, 2, 3</a>, SC 2011 (the Random123 library). RandBLAS draws every random number from a Random123 counter-based generator, Philox by default with Threefry supported, so a draw is addressable by key and counter and does not depend on the thread count.</li>
  <li id="s9">O. Balabanov, M. Melnichenko, M. W. Mahoney. <a href="https://arxiv.org/abs/2610.16101" target="_blank" rel="noopener">Stable Matrix-Free Q-less QR via Preconditioning and Randomization</a>, arXiv:2610.16101, October 2026. The Q-less QR implementation on the poster: randomized preconditioning makes a single Cholesky QR pass numerically safe for any numerically full-rank operator, with a componentwise stability analysis that also covers Cholesky QR2 and shifted Cholesky QR3; implemented in RandLAPACK.</li>
  <li id="s10">N. J. Higham. <a href="https://doi.org/10.1137/1.9780898718027" target="_blank" rel="noopener">Accuracy and Stability of Numerical Algorithms</a>, 2nd ed., SIAM, 2002. All 28 chapters are formalized in VSCL within an audited scope.</li>
  <li id="s11">R. J. LeVeque. <a href="https://doi.org/10.1017/CBO9780511791253" target="_blank" rel="noopener">Finite Volume Methods for Hyperbolic Problems</a>, Cambridge University Press, 2002. Chapters 1 to 3 are formalized.</li>
  <li id="s12">R. Vershynin. <a href="https://doi.org/10.1017/9781108231596" target="_blank" rel="noopener">High-Dimensional Probability: An Introduction with Applications in Data Science</a>, Cambridge University Press, 2018. Chapters 1 and 2 are formalized; Chapter 3 is in progress.</li>
  <li id="s13">P. Drineas, M. W. Mahoney. <a href="https://doi.org/10.1145/2842602" target="_blank" rel="noopener">RandNLA: Randomized Numerical Linear Algebra</a>, Communications of the ACM 59(6), 2016. The RandNLA case study in VSCL: sampling, matrix concentration, low-rank approximation, least-squares sketching, randomized preconditioning.</li>
  <li id="s14">J. Nocedal, S. J. Wright. <a href="https://doi.org/10.1007/978-0-387-40065-5" target="_blank" rel="noopener">Numerical Optimization</a>, 2nd ed., Springer, 2006. Formalization in progress.</li>
  <li id="s15">R. Bhatia. <a href="https://doi.org/10.1007/978-1-4612-0653-8" target="_blank" rel="noopener">Matrix Analysis</a>, Graduate Texts in Mathematics 169, Springer, 1997. Formalization in progress (started October 2026).</li>
  <li id="s16">A. Greenbaum. <a href="https://doi.org/10.1137/1.9781611970937" target="_blank" rel="noopener">Iterative Methods for Solving Linear Systems</a>, SIAM, 1997. Next in the queue.</li>
  <li id="s17">Y. Saad. <a href="https://doi.org/10.1137/1.9780898718003" target="_blank" rel="noopener">Iterative Methods for Sparse Linear Systems</a>, 2nd ed., SIAM, 2003. Next in the queue.</li>
  <li id="s18">S. Boyd, L. Vandenberghe. <a href="https://doi.org/10.1017/CBO9780511804441" target="_blank" rel="noopener">Convex Optimization</a>, Cambridge University Press, 2004. Next in the queue.</li>
  <li id="s19">The mathlib Community. <a href="https://doi.org/10.1145/3372885.3373824" target="_blank" rel="noopener">The Lean mathematical library</a>, CPP 2020; the library today is <a href="https://github.com/leanprover-community/mathlib4" target="_blank" rel="noopener">mathlib4</a>. Counts use one theorem/lemma-line regex at commit 021ce68 (2026-10-07). Under a strict rule (finite-precision and approximation results only) Mathlib has 13 lines on numerical analysis, a floating-point model and the trapezoidal rule, and none on numerical linear algebra. Under the broad rule of the printed poster's comparison, which also counts exact-arithmetic matrix algorithms, it has 104 lines on numerical linear algebra (Gram-Schmidt, LDL, row echelon form, Hessenberg matrices and reduction by transvections) and 117 on numerical analysis; none concern rounding error, stability or conditioning. VSCL builds on Mathlib.</li>
  <li id="s20">N. Halko, P. G. Martinsson, J. A. Tropp. <a href="https://doi.org/10.1137/090771806" target="_blank" rel="noopener">Finding structure with randomness: probabilistic algorithms for constructing approximate matrix decompositions</a>, SIAM Review 53(2), 2011. The randomized SVD, the QB factorization and randomized range finders.</li>
  <li id="s21">Y. Chen, E. N. Epperly, J. A. Tropp, R. J. Webber. <a href="https://arxiv.org/abs/2207.06503" target="_blank" rel="noopener">Randomly pivoted Cholesky: practical approximation of a kernel matrix with few entry evaluations</a>, Communications on Pure and Applied Mathematics 78(5), 2025; arXiv:2207.06503. RPCholesky.</li>
  <li id="s22">P. G. Martinsson, G. Quintana-Ort&iacute;, N. Heavner, R. van de Geijn. <a href="https://doi.org/10.1137/16M1081270" target="_blank" rel="noopener">Householder QR factorization with randomization for column pivoting (HQRRP)</a>, SIAM Journal on Scientific Computing 39(2), 2017.</li>
  <li id="s23">T. Fukaya, R. Kannan, Y. Nakatsukasa, Y. Yamamoto, Y. Yanagisawa. <a href="https://doi.org/10.1137/18M1218212" target="_blank" rel="noopener">Shifted Cholesky QR for computing the QR factorization of ill-conditioned matrices</a>, SIAM Journal on Scientific Computing 42(1), 2020. Shifted CholeskyQR3 (sCholQR3).</li>
  <li id="s24">M. D&iacute;az, E. N. Epperly, Z. Frangella, J. A. Tropp, R. J. Webber. <a href="https://arxiv.org/abs/2304.12465" target="_blank" rel="noopener">Robust, randomized preconditioning for kernel ridge regression</a>, arXiv:2304.12465, 2023. KRILL.</li>
  <li id="s25">H. Avron, P. Maymounkov, S. Toledo. <a href="https://doi.org/10.1137/090767911" target="_blank" rel="noopener">Blendenpik: supercharging LAPACK's least-squares solver</a>, SIAM Journal on Scientific Computing 32(3), 2010.</li>
  <li id="s26">C. C. Paige, M. A. Saunders. <a href="https://doi.org/10.1145/355984.355989" target="_blank" rel="noopener">LSQR: an algorithm for sparse linear equations and sparse least squares</a>, ACM Transactions on Mathematical Software 8(1), 1982.</li>
  <li id="s27">Y. Yamamoto, Y. Nakatsukasa, Y. Yanagisawa, T. Fukaya. <a href="https://etna.ricam.oeaw.ac.at/vol.44.2015/pp306-326.dir/pp306-326.pdf" target="_blank" rel="noopener">Roundoff error analysis of the CholeskyQR2 algorithm</a>, Electronic Transactions on Numerical Analysis 44, pp. 306-326, 2015. Cholesky QR2.</li>
  <li id="s28">K. L. Clarkson, D. P. Woodruff. <a href="https://doi.org/10.1145/2488608.2488620" target="_blank" rel="noopener">Low-rank approximation and regression in input sparsity time</a>, STOC 2013 (Journal of the ACM 63(6), 2017). CountSketch as a sketching operator; RandBLAS's short-axis sparse operators (SASO) include it.</li>
  <li id="s29">M. Derezi&nacute;ski, Z. Liao, E. Dobriban, M. W. Mahoney. <a href="https://arxiv.org/abs/2011.10695" target="_blank" rel="noopener">Sparse sketches with small inversion bias</a>, COLT 2021; arXiv:2011.10695. Leverage-score sparsified (LESS) embeddings; RandBLAS's long-axis sparse operators (LASO) include them.</li>
  <li id="s30">I. S. Dhillon, B. N. Parlett. <a href="https://doi.org/10.1016/j.laa.2003.12.028" target="_blank" rel="noopener">Multiple representations to compute orthogonal eigenvectors of symmetric tridiagonal matrices</a>, Linear Algebra and its Applications 387, 2004. The MR&sup3; algorithm; the MR&sup3;-based SVD headed for a future LAPACK release is not yet published.</li>
  <li id="s31">IEEE P3109 Working Group. <a href="https://github.com/P3109/Public" target="_blank" rel="noopener">Arithmetic Formats for Machine Learning (draft standard; public materials)</a>. Low-precision floating-point formats and their reductions.</li>
  <li id="s32">F. Pedregosa et al. <a href="https://jmlr.org/papers/v12/pedregosa11a.html" target="_blank" rel="noopener">Scikit-learn: machine learning in Python</a>, Journal of Machine Learning Research 12, 2011. The kernel PCA baseline of the 1700x tile.</li>
  <li id="s33">L. de Moura, S. Ullrich. <a href="https://doi.org/10.1007/978-3-030-79876-5_37" target="_blank" rel="noopener">The Lean 4 theorem prover and programming language</a>, Automated Deduction, CADE 28, Lecture Notes in Computer Science, Springer, 2021, pp. 625-635.</li>
  <li id="s34">M. Gates, P. Luszczek, A. Abdelfattah, J. Kurzak, J. Dongarra, K. Arturov, C. Cecka, C. Freitag. C++ API for BLAS and LAPACK, SLATE Working Note 2, Innovative Computing Laboratory, University of Tennessee; the libraries: <a href="https://github.com/icl-utk-edu/blaspp" target="_blank" rel="noopener">BLAS++</a> and <a href="https://github.com/icl-utk-edu/lapackpp" target="_blank" rel="noopener">LAPACK++</a>.</li>
  <li id="s35">F. G. Van Zee, R. A. van de Geijn. <a href="https://doi.org/10.1145/2764454" target="_blank" rel="noopener">BLIS: a framework for rapidly instantiating BLAS functionality</a>, ACM Transactions on Mathematical Software 41(3), 2015.</li>
  <li id="s36">F. G. Van Zee, E. Chan, R. A. van de Geijn, E. S. Quintana-Ort&iacute;, G. Quintana-Ort&iacute;. <a href="https://doi.org/10.1109/MCSE.2009.207" target="_blank" rel="noopener">The libflame library for dense matrix computations</a>, Computing in Science &amp; Engineering 11(6), 2009.</li>
  <li id="s37">Z. Frangella, J. A. Tropp, M. Udell. <a href="https://doi.org/10.1137/21M1466244" target="_blank" rel="noopener">Randomized Nystr&ouml;m preconditioning</a>, SIAM Journal on Matrix Analysis and Applications 44(2), 2023; arXiv:2110.02820. RandLAPACK's REVD2 follows its Algorithm E.2 (adaptive randomized Nystr&ouml;m approximation), with the error estimate of Algorithm E.1.</li>
  <li id="s38">X. Zhang, Q. Wang, Y. Zhang. <a href="https://doi.org/10.1109/ICPADS.2012.97" target="_blank" rel="noopener">Model-driven level 3 BLAS performance optimization on Loongson 3A processor</a>, ICPADS 2012; the library: <a href="https://github.com/OpenMathLib/OpenBLAS" target="_blank" rel="noopener">OpenBLAS</a>.</li>
  <li id="s39">Intel. <a href="https://www.intel.com/content/www/us/en/developer/tools/oneapi/onemkl.html" target="_blank" rel="noopener">Intel oneAPI Math Kernel Library (oneMKL)</a>, developer reference.</li>
  <li id="s40">Apple. <a href="https://developer.apple.com/documentation/accelerate" target="_blank" rel="noopener">Accelerate framework</a>, developer documentation (BLAS and LAPACK interfaces).</li>
  <li id="s41">AMD. <a href="https://www.amd.com/en/developer/aocl.html" target="_blank" rel="noopener">AMD Optimizing CPU Libraries (AOCL)</a>, user guide; AOCL-BLAS is built on BLIS [35] and AOCL-LAPACK on libflame [36].</li>
  <li id="s42">HPE. Cray Programming Environment: Cray Scientific and Math Libraries (LibSci), documentation.</li>
  <li id="s43">IBM. <a href="https://www.ibm.com/docs/en/essl" target="_blank" rel="noopener">Engineering and Scientific Subroutine Library (ESSL)</a>, documentation.</li>
  <li id="s44">GPU MODE Cholesky factorization competition, 2026 (<a href="https://www.gpumode.com/leaderboard/776" target="_blank" rel="noopener">leaderboard 776</a>). The top five submissions were audited with the same harness as the QR rounds.</li>
  <li id="s45">GPU MODE eigendecomposition (eigh) competition, 2026 (<a href="https://www.gpumode.com/leaderboard/775" target="_blank" rel="noopener">leaderboard 775</a>). The top five submissions were audited with the same harness as the QR rounds; together with [44] they are the "7 of 10" on the poster.</li>
<li id="s46">J. A. Tropp, R. J. Webber. <a href="https://arxiv.org/abs/2306.12418" target="_blank" rel="noopener">Randomized algorithms for low-rank matrix approximation: design, analysis, and applications</a>, arXiv:2306.12418, 2023. The randomized SVD and randomized block Krylov iteration (RBKI).</li>
<li id="s47">T. Chen. <a href="https://arxiv.org/abs/2410.11090" target="_blank" rel="noopener">The Lanczos algorithm for matrix functions: a handbook for scientists</a>, arXiv:2410.11090, 2024. Lanczos-FA and Lanczos-QF; block Lanczos-FA in funNystr&ouml;m++.</li>
</ol>

<p>
  Related: the companion page for our <a href="/projects/mathai/">Math &amp; AI Summer in Seattle poster</a>.
</p>

<p class="sky-credit">
  Presented by Maksim Melnichenko. PIs: Michael W. Mahoney, Riley J. Murray and Kimon
  Fountoulakis. The work spans UC Berkeley, the International Computer Science Institute, Sandia
  National Laboratories, the University of Tennessee, Knoxville, and the University of Waterloo.
  Page maintained by Maksim Melnichenko.
</p>
