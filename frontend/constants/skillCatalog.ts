export type SkillCatalogGroup = {
  label: string;
  skills: string[];
};

/** Mirrors `backend/src/models/skillCatalog.ts` for offline dashboard display. */
export const skillCatalog: SkillCatalogGroup[] = [
  {
    label: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "C#",
      "PHP",
      "Python",
      "Go",
      "Java",
      "HTML5",
      "CSS3/SCSS",
      "SQL",
    ],
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
    skills: [
      "Node.js",
      "ASP.NET MVC",
      ".NET Core Web API",
      "Laravel",
      "Zend Framework",
      "FastAPI",
      "Spring Boot",
    ],
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
      "PostgreSQL",
      "Redis",
      "CI/CD",
      "Kubernetes",
      "Kafka",
      "Nginx",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "VS Code", "Visual Studio", "Cursor", "Linux", "AI Agents"],
  },
];

export const skillId = (name: string) =>
  name
    .toLowerCase()
    .replace(/c#/g, "c-sharp")
    .replace(/\.net/g, "dotnet")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const catalogSkillGroups = (selectedIds: Set<string> = new Set()) =>
  skillCatalog.map((group) => ({
    label: group.label,
    skills: group.skills.map((name) => ({
      id: skillId(name),
      name,
      group: group.label,
      selected: selectedIds.has(skillId(name)),
    })),
  }));