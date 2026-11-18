export type CatalogGroup = {
	label: string;
	skills: string[];
};

export const skillCatalog: CatalogGroup[] = [
	{
		label: "Languages",
		skills: ["JavaScript", "TypeScript", "C#", "PHP", "HTML5", "CSS3/SCSS", "SQL"],
	},
	{
		label: "Frontend",
		skills: [
			"React",
			"Next.js",
			"Vue.js",
			"React Native",
			"Tailwind CSS",
			"Bootstrap",
			"Material-UI",
		],
	},
	{
		label: "Backend",
		skills: ["Node.js", "ASP.NET MVC", ".NET Core Web API", "Laravel", "Zend Framework"],
	},
	{
		label: "Cloud and DevOps",
		skills: [
			"AWS Lambda",
			"Cognito",
			"CodeBuild",
			"CodePipeline",
			"EC2",
			"Docker",
			"Serverless",
			"DynamoDB",
			"MySQL",
			"MSSQL",
			"CI/CD",
		],
	},
	{
		label: "Tools",
		skills: ["Git", "VS Code", "Visual Studio", "Cursor", "AI Agents"],
	},
];

export const skillId = (name: string) =>
	name
		.toLowerCase()
		.replace(/c#/g, "c-sharp")
		.replace(/\.net/g, "dotnet")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

export const findCatalogSkill = (name: string) => {
	for (const group of skillCatalog) {
		if (group.skills.includes(name)) {
			return { id: skillId(name), name, group: group.label };
		}
	}

	return undefined;
};
