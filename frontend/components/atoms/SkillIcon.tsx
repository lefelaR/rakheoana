import type { IconType } from "react-icons";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import { LuBot, LuCode, LuDatabase, LuWorkflow } from "react-icons/lu";
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

const icons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "C#": SiSharp,
  PHP: SiPhp,
  HTML5: SiHtml5,
  "CSS3/SCSS": SiSass,
  SQL: LuDatabase,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "React Native": SiReact,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Material-UI": SiMui,
  "Node.js": SiNodedotjs,
  "ASP.NET MVC": SiDotnet,
  ".NET Core Web API": SiDotnet,
  Laravel: SiLaravel,
  "Zend Framework": SiZend,
  "AWS Lambda": FaAws,
  Cognito: FaAws,
  CodeBuild: FaAws,
  CodePipeline: FaAws,
  EC2: FaAws,
  Docker: SiDocker,
  Serverless: SiServerless,
  DynamoDB: FaAws,
  MySQL: SiMysql,
  MSSQL: FaMicrosoft,
  "CI/CD": LuWorkflow,
  Git: SiGit,
  "VS Code": VscCode,
  "Visual Studio": DiVisualstudio,
  Cursor: SiCursor,
  "AI Agents": LuBot,
};

type SkillIconProps = {
  name: string;
};

const SkillIcon = ({ name }: SkillIconProps) => {
  const Icon = icons[name] ?? LuCode;
  return <Icon size={28} aria-hidden="true" />;
};

export default SkillIcon;
