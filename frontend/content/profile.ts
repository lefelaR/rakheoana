import type { Education, ExperienceRole, Profile, SkillGroup } from "@models/profile";

export const profile: Profile = {
  name: "Rakheoana Lefela",
  title: "Senior Full-Stack Engineer",
  location: "Cape Town, South Africa",
  relocate: "Willing to relocate",
  availability: "Available for senior roles",
  years: "9+ years · six roles",
  summary:
    "Senior Full-Stack Engineer with 9+ years building scalable web apps across hospitality tech, SaaS, and data-collection. Honors-level IT, deep in JS/TS (React, Next.js, Vue, React Native), PHP (Laravel, Zend) and C# / .NET. Key contributor to features end-to-end, from architecture and CI/CD on AWS to fixing critical production bugs. Software Developer at RoomRaccoon (Cape Town), responsible for maintaining and enhancing the Housekeeping Module.",
  contact: {
    email: "rakgew@gmail.com",
    phone: "+27 78 375 4146",
    linkedin: "https://linkedin.com/in/rakheoana-lefela-21a36051",
    site: "https://rakheoana.co.za",
  },
  targetRoles: ["Web Developer", "Software Engineer", "Full-Stack Developer"],
  strengths: ["Laravel", "C#/.NET Core API", "React/Next.js/Vue", "AWS CI/CD"],
  workModes: "Open to remote, hybrid, and relocation.",
};

export const experience: ExperienceRole[] = [
  {
    company: "RoomRaccoon",
    role: "Software Developer",
    period: "Jul 2024 - Oct 31, 2024",
    location: "Hotel Tech, Cape Town",
    stack: ["JS", "Vue.js", "PHP", "Docker", "MySQL", "SCSS"],
    bullets: [
      "Software Developer at RoomRaccoon (Cape Town) — responsible for maintaining and enhancing the Housekeeping Module (JS/PHP/Vue), serving 1,800+ properties.",
      "Key contributor to fixing critical user bugs within SLA < 4h, stabilizing production for high-season operations.",
      "Developing AI tools and agents to improve code quality and team velocity; maintaining SCSS architecture and performance improvements.",
    ],
  },
  {
    company: "ISUTECH",
    role: "FullStack Software Developer",
    period: "Nov 2023 — Jun 2024",
    location: "SaaS",
    stack: ["PHP", "C#", "ASP.NET", "Tailwind", "AWS Cognito", "DynamoDB", "Lambda", "EC2"],
    bullets: [
      "Mentored 3 junior developers with weekly code reviews and architecture sessions — improved PR quality and reduced rework.",
      "Led SDLC planning (requirements to deployment) for 2 client web apps, delivering on time within AWS constraints.",
      "Built and shipped CI/CD pipelines (CodeBuild/CodePipeline + EC2) cutting deploy time from 18 min to about 4 min.",
    ],
  },
  {
    company: "Turati Software",
    role: "FullStack Software Developer",
    period: "Feb 2022 — Nov 2023",
    location: "Mobile and Web",
    stack: ["JS/TS", "React", "Next.js", "React Native", "Expo", "AWS", "Cloudflare", "Vercel"],
    bullets: [
      "Led project kick-offs, discovery, and onboarding for interns — created a reusable Next.js + Serverless starter.",
      "Published 2 apps to the Play Store via React Native/Expo; handled signing, OTA updates, and store reviews.",
      "Built REST APIs on Serverless Framework + DynamoDB + Cloudflare, handling 50k+ monthly requests with <150ms p95.",
    ],
  },
  {
    company: "Wemasoft",
    role: "Software Developer — Team Lead",
    period: "Jun 2021 — Nov 2021",
    location: "Enterprise",
    stack: ["jQuery", "JS", "PHP", "Zend", "Bootstrap"],
    bullets: [
      "Acted as team lead: task allocation, performance reviews, and stakeholder unblocking for a 5-person squad.",
      "Upgraded a legacy jQuery/PHP/Zend monolith — introduced modular JS and cut the critical bug backlog by 40%.",
    ],
  },
  {
    company: "Lucidocean (now Solitan London)",
    role: "Software Developer",
    period: "Jul 2018 — Mar 2021",
    location: "SaaS and data platform",
    stack: ["Apache", "JS/TS", "Bootstrap", "C#", "MVC", "Cordova", "Node.js"],
    bullets: [
      "Modernized ASP.NET MVC UIs to Bootstrap 4/5 — improved accessibility and mobile usability for field agents.",
      "Administered large-scale data-collection apps (10k+ daily submissions) — query tuning, indexing, monitoring.",
      "Built offline-first PWAs with Cordova + Node.js bridge, enabling data capture in low-connectivity zones.",
    ],
  },
  {
    company: "Design Guru",
    role: "Intern PHP Developer",
    period: "Sep 2015 — Dec 2015",
    location: "Web Studio, Cape Town",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    bullets: [
      "Converted static HTML to dynamic PHP/MySQL — templated email system with responsive layouts.",
      "Fixed production bugs and implemented CMS features, improving content update time for non-technical staff.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "C#", "PHP", "HTML5", "CSS3/SCSS", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "React Native", "Tailwind CSS", "Bootstrap", "Material-UI"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "ASP.NET MVC", ".NET Core Web API", "Laravel", "Zend Framework"],
  },
  {
    name: "Cloud and DevOps",
    skills: ["AWS Lambda", "Cognito", "CodeBuild", "CodePipeline", "EC2", "Docker", "Serverless", "DynamoDB", "MySQL", "MSSQL", "CI/CD"],
  },
  {
    name: "Tools",
    skills: ["Git", "VS Code", "Visual Studio", "Cursor", "AI Agents"],
  },
];

export const education: Education = {
  school: "Limkokwing University (Lesotho)",
  qualification: "Bachelor of Science: Information Technology (e-Commerce)",
  period: "2008–2012",
};
