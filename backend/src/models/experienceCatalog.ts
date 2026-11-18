import { ExperienceRecord } from "./experience.model";

export const experienceCatalog: ExperienceRecord[] = [
	{
		id: "roomraccoon",
		company: "RoomRaccoon",
		title: "Software Developer",
		location: "Cape Town, South Africa",
		startDate: "Jul 2024",
		endDate: "Oct 2024",
		stack: "JavaScript, Vue.js, PHP, Docker, MySQL, SCSS",
		highlights: [
			"Maintained and enhanced the Housekeeping Module (JS/PHP/Vue) for 1,800+ properties.",
			"Fixed critical user bugs within SLA under 4 hours during high season.",
			"Developed AI tooling for code quality; maintained SCSS architecture and performance.",
		],
	},
	{
		id: "isutech",
		company: "ISUTECH",
		title: "Full-Stack Software Developer",
		location: "South Africa",
		startDate: "Nov 2023",
		endDate: "Jun 2024",
		stack: "PHP, C#, ASP.NET, Tailwind, AWS Cognito, DynamoDB, Lambda, EC2",
		highlights: [
			"Mentored 3 junior developers with weekly code reviews and architecture sessions.",
			"Led SDLC planning for 2 client web apps, delivering on time within AWS constraints.",
			"Built CI/CD pipelines (CodeBuild/CodePipeline + EC2), cutting deploy time from 18 min to ~4 min.",
		],
	},
	{
		id: "turati",
		company: "Turati Software",
		title: "Full-Stack Software Developer",
		location: "Johannesburg, South Africa",
		startDate: "Feb 2022",
		endDate: "Nov 2023",
		stack: "JS/TS, React, Next.js, React Native, Expo, AWS, Cloudflare, Vercel",
		highlights: [
			"Led project kick-offs and onboarding; created a reusable Next.js + Serverless starter.",
			"Published 2 apps to the Play Store via React Native/Expo.",
			"Built REST APIs on Serverless + DynamoDB + Cloudflare (50k+ monthly requests, <150ms p95).",
		],
	},
	{
		id: "wemasoft",
		company: "Wemasoft",
		title: "Software Developer — Team Lead",
		location: "Pretoria, South Africa",
		startDate: "Jun 2021",
		endDate: "Nov 2021",
		stack: "jQuery, JavaScript, PHP, Zend, Bootstrap",
		highlights: [
			"Led a 5-person squad: task allocation, performance reviews, stakeholder unblocking.",
			"Upgraded a legacy jQuery/PHP/Zend monolith; cut the critical bug backlog by 40%.",
		],
	},
	{
		id: "lucidocean",
		company: "Lucidocean (now Solitan London)",
		title: "Software Developer",
		location: "Cape Town, South Africa",
		startDate: "Jul 2018",
		endDate: "Mar 2021",
		stack: "Apache, JS/TS, Bootstrap, C#, MVC, Cordova, Node.js",
		highlights: [
			"Modernized ASP.NET MVC UIs to Bootstrap 4/5 for field agents.",
			"Administered large-scale data-collection apps (10k+ daily submissions).",
			"Built offline-first PWAs with Cordova and a Node.js bridge.",
		],
	},
	{
		id: "design-guru",
		company: "Design Guru",
		title: "Intern PHP Developer",
		location: "Cape Town, South Africa",
		startDate: "Sep 2015",
		endDate: "Dec 2015",
		stack: "PHP, MySQL, HTML, CSS",
		highlights: [
			"Converted static HTML to dynamic PHP/MySQL with responsive email templates.",
			"Fixed production bugs and shipped CMS features for non-technical staff.",
		],
	},
];

export const findCatalogExperience = (id: string) =>
	experienceCatalog.find((role) => role.id === id);

export const experienceId = (company: string) =>
	company
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");