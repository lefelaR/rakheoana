import Layout from "components/layouts/dashboardLayout";
import TechStackTemplate, {
  type TechStackGroup,
} from "@components/templates/TechStackTemplate";

const groups: TechStackGroup[] = [
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

const DashboardTechStack = () => {
  return (
    <Layout>
      <TechStackTemplate groups={groups} />
    </Layout>
  );
};

export default DashboardTechStack;
