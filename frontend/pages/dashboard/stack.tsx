import { FaAws, FaMicrosoft } from "react-icons/fa6";
import { LuBot, LuDatabase, LuWorkflow } from "react-icons/lu";
import { DiVisualstudio } from "react-icons/di";
import { VscCode } from "react-icons/vsc";
import {
  SiBootstrap,
  SiCursor,
  SiDocker,
  SiDotnet,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSass,
  SiServerless,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiZend,
} from "react-icons/si";
import Layout from "components/layouts/dashboardLayout";
import TechStackTemplate, {
  type TechStackGroup,
} from "@components/templates/TechStackTemplate";

const iconSize = 28;

const groups: TechStackGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={iconSize} /> },
      { name: "TypeScript", icon: <SiTypescript size={iconSize} /> },
      { name: "C#", icon: <SiSharp size={iconSize} /> },
      { name: "PHP", icon: <SiPhp size={iconSize} /> },
      { name: "HTML5", icon: <SiHtml5 size={iconSize} /> },
      { name: "CSS3/SCSS", icon: <SiSass size={iconSize} /> },
      { name: "SQL", icon: <LuDatabase size={iconSize} /> },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: <SiReact size={iconSize} /> },
      { name: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
      { name: "Vue.js", icon: <SiVuedotjs size={iconSize} /> },
      { name: "React Native", icon: <SiReact size={iconSize} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={iconSize} /> },
      { name: "Bootstrap", icon: <SiBootstrap size={iconSize} /> },
      { name: "Material-UI", icon: <SiMui size={iconSize} /> },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={iconSize} /> },
      { name: "ASP.NET MVC", icon: <SiDotnet size={iconSize} /> },
      { name: ".NET Core Web API", icon: <SiDotnet size={iconSize} /> },
      { name: "Laravel", icon: <SiLaravel size={iconSize} /> },
      { name: "Zend Framework", icon: <SiZend size={iconSize} /> },
    ],
  },
  {
    label: "Cloud and DevOps",
    skills: [
      { name: "AWS Lambda", icon: <FaAws size={iconSize} /> },
      { name: "Cognito", icon: <FaAws size={iconSize} /> },
      { name: "CodeBuild", icon: <FaAws size={iconSize} /> },
      { name: "CodePipeline", icon: <FaAws size={iconSize} /> },
      { name: "EC2", icon: <FaAws size={iconSize} /> },
      { name: "Docker", icon: <SiDocker size={iconSize} /> },
      { name: "Serverless", icon: <SiServerless size={iconSize} /> },
      { name: "DynamoDB", icon: <FaAws size={iconSize} /> },
      { name: "MySQL", icon: <SiMysql size={iconSize} /> },
      { name: "MSSQL", icon: <FaMicrosoft size={iconSize} /> },
      { name: "CI/CD", icon: <LuWorkflow size={iconSize} /> },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <SiGit size={iconSize} /> },
      { name: "VS Code", icon: <VscCode size={iconSize} /> },
      { name: "Visual Studio", icon: <DiVisualstudio size={iconSize} /> },
      { name: "Cursor", icon: <SiCursor size={iconSize} /> },
      { name: "AI Agents", icon: <LuBot size={iconSize} /> },
    ],
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
