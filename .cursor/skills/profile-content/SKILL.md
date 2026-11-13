---
name: profile-content
description: >-
  Supplies Rakheoana Lefela's public profile facts from the 2026 CV, privacy
  limits, and the mapping onto frontend pages and /api profile resources. Use
  when writing profile copy, page data, experience, skills, education, contact
  details, or /api/profile, /api/experience, /api/skills, or /api/education
  payloads.
---

# Profile content

Rakheoana Lefela's public profile uses the 2026 CV (Cape Town edition) as the only source of facts. Do not invent employers, dates, metrics, or posts. Do not treat the current hardcoded page copy as canonical.

## Identity

- Name: Rakheoana Lefela
- Title: Senior Full-Stack Engineer
- Location: Cape Town, South Africa. Willing to relocate.
- Status: Available for senior roles. 9+ years. Six roles.
- Email: rakgew@gmail.com
- Phone: +27 78 375 4146
- LinkedIn: https://linkedin.com/in/rakheoana-lefela-21a36051
- Site: https://rakheoana.co.za

## Summary

Senior Full-Stack Engineer with 9+ years building scalable web apps across hospitality tech, SaaS, and data-collection. Honors-level IT, deep in JS/TS (React, Next.js, Vue, React Native), PHP (Laravel, Zend) and C# / .NET. Key contributor to features end-to-end, from architecture and CI/CD on AWS to fixing critical production bugs. Software Developer at RoomRaccoon (Cape Town), responsible for maintaining and enhancing the Housekeeping Module.

## Target roles

Web Developer, Software Engineer, Full-Stack Developer. Strengths called out on the CV: Laravel, C#/.NET Core API, React/Next.js/Vue, AWS CI/CD. Open to remote, hybrid, and relocation.

## Skills

Keep these five groups. Do not add or drop names.

- Languages: JavaScript, TypeScript, C#, PHP, HTML5, CSS3/SCSS, SQL
- Frontend: React, Next.js, Vue.js, React Native, Tailwind CSS, Bootstrap, Material-UI
- Backend: Node.js, ASP.NET MVC, .NET Core Web API, Laravel, Zend Framework
- Cloud and DevOps: AWS Lambda, Cognito, CodeBuild, CodePipeline, EC2, Docker, Serverless, DynamoDB, MySQL, MSSQL, CI/CD
- Tools: Git, VS Code, Visual Studio, Cursor, AI Agents

## Education

Limkokwing University (Lesotho). Bachelor of Science: Information Technology (e-Commerce). 2008–2012.

## Experience

Newest first. Copy the bullets. Do not add responsibilities that are not listed.

### RoomRaccoon

Software Developer. Jul 2024 - Oct 31, 2024. Hotel Tech, Cape Town. Stack: JS, Vue.js, PHP, Docker, MySQL, SCSS.

- Software Developer at RoomRaccoon (Cape Town) — responsible for maintaining and enhancing the Housekeeping Module (JS/PHP/Vue), serving 1,800+ properties.
- Key contributor to fixing critical user bugs within SLA < 4h, stabilizing production for high-season operations.
- Developing AI tools and agents to improve code quality and team velocity; maintaining SCSS architecture and performance improvements.

### ISUTECH

FullStack Software Developer. Nov 2023 — Jun 2024. SaaS. Stack: PHP, C#, ASP.NET, Tailwind, AWS Cognito, DynamoDB, Lambda, EC2.

- Mentored 3 junior developers with weekly code reviews and architecture sessions — improved PR quality and reduced rework.
- Led SDLC planning (requirements to deployment) for 2 client web apps, delivering on time within AWS constraints.
- Built and shipped CI/CD pipelines (CodeBuild/CodePipeline + EC2) cutting deploy time from 18 min to about 4 min.

### Turati Software

FullStack Software Developer. Feb 2022 — Nov 2023. Mobile and Web. Stack: JS/TS, React, Next.js, React Native, Expo, AWS, Cloudflare, Vercel.

- Led project kick-offs, discovery, and onboarding for interns — created a reusable Next.js + Serverless starter.
- Published 2 apps to the Play Store via React Native/Expo; handled signing, OTA updates, and store reviews.
- Built REST APIs on Serverless Framework + DynamoDB + Cloudflare, handling 50k+ monthly requests with <150ms p95.

### Wemasoft

Software Developer — Team Lead. Jun 2021 — Nov 2021. Enterprise. Stack: jQuery, JS, PHP, Zend, Bootstrap.

- Acted as team lead: task allocation, performance reviews, and stakeholder unblocking for a 5-person squad.
- Upgraded a legacy jQuery/PHP/Zend monolith — introduced modular JS and cut the critical bug backlog by 40%.

### Lucidocean (now Solitan London)

Software Developer. Jul 2018 — Mar 2021. SaaS and data platform. Stack: Apache, JS/TS, Bootstrap, C#, MVC, Cordova, Node.js.

- Modernized ASP.NET MVC UIs to Bootstrap 4/5 — improved accessibility and mobile usability for field agents.
- Administered large-scale data-collection apps (10k+ daily submissions) — query tuning, indexing, monitoring.
- Built offline-first PWAs with Cordova + Node.js bridge, enabling data capture in low-connectivity zones.

### Design Guru

Intern PHP Developer. Sep 2015 — Dec 2015. Web Studio, Cape Town. Stack: PHP, MySQL, HTML, CSS.

- Converted static HTML to dynamic PHP/MySQL — templated email system with responsive layouts.
- Fixed production bugs and implemented CMS features, improving content update time for non-technical staff.

## Privacy

Publish name, city-level location, email, the phone number above, LinkedIn, and the site URL. Do not publish a passport number, a street address, or reference phone numbers. Date of birth is on the current home page and is not on the CV; do not carry it into new profile content.

## Where each fact goes

- `frontend/pages/index.tsx`: name, senior title, summary, Cape Town, contact, LinkedIn. The "Lefela Legacy" story and the line "Web and software Developer" are not sources of truth. Replace placeholder social links (`twitter.com/r_lefela`, `github.com/`, `linkedin.com/feed/`) with the CV LinkedIn URL.
- `frontend/pages/experience.tsx`: the six roles above. Turati ends Nov 2023. It is not a current role.
- `frontend/pages/stack.tsx`: the five skill groups. The four cards (AWS, Node, React, Git) are incomplete.
- `frontend/pages/portfolio.tsx`: work samples already on the page. The CV has no case-study list. Do not turn those clients into employers. The ISUTECH job (2023–2024) is not the same fact as the ISU Technologies screenshot attributed to Lucidocean.
- `frontend/pages/contact.tsx`: email and phone from this skill. When the form is wired, it posts through `/api`. Do not keep a hardcoded `sendEmail` body as the contract.
- `frontend/pages/blog.tsx`: no posts exist on the CV. Leave the page empty. Do not invent articles.

## API resources

Profile reads and writes use these routes, and no parallel shapes:

- `/api/profile` — identity, summary, contact, target roles
- `/api/experience` — the six roles, newest first
- `/api/skills` — the five groups
- `/api/education` — the Limkokwing degree
