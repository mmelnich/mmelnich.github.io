// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Below is my personal GitHub repository, as well as the repos of the projects that I actively contribute to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-i-successfully-defended-my-ph-d-dissertation-titled-responsible-recklessness-why-high-performance-computing-must-embrace-randomized-numerical-linear-algebra",
          title: 'I successfully defended my Ph.D dissertation titled “Responsible Recklessness: Why High Performance Computing...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-announce-that-on-january-2nd-2026-i-will-be-starting-my-postdoc-appointment-at-icsi-and-uc-berkeley-department-of-statistics-working-under-supervision-of-dr-michael-mahoney",
          title: 'I am excited to announce that on January 2nd, 2026, I will be...',
          description: "",
          section: "News",},{id: "news-if-you-plan-on-attending-the-sc25-conference-come-join-my-bof-session-on-randnla-software",
          title: 'If you plan on attending the SC25 conference, come join my BoF session...',
          description: "",
          section: "News",},{id: "news-if-you-plan-on-attending-the-sc26-conference-in-chicago-come-join-my-bof-session-on-numerical-linear-algebra-in-the-age-of-coding-agents-wednesday-november-18-at-5-15pm",
          title: 'If you plan on attending the SC26 conference in Chicago, come join my...',
          description: "",
          section: "News",},{id: "projects-computational-mathematics-for-and-with-ai-ml",
          title: 'Computational Mathematics for and with AI/ML',
          description: "Companion page for our group poster at the Math &amp; AI workshop in Seattle (August 18-20, 2026).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mathai/";
            },},{id: "projects-randnla-dice",
          title: 'RandNLA Dice',
          description: "SC25 BoF Handout",
          section: "Projects",handler: () => {
              window.location.href = "/projects/randnla_dice/";
            },},{id: "projects-numerical-linear-algebra-software-in-the-ai-era-present-and-future",
          title: 'Numerical Linear Algebra Software in the AI Era: Present and Future',
          description: "Companion page for our poster at the Sky Computing Lab End-of-Project meeting (UC Berkeley, October 21, 2026).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sky/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6D%65%6C%6E%69%63%68@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mmelnich", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-7749-188X", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
