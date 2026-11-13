import SkillGroup from "@components/organisms/SkillGroup";
import styles from "./TechStackTemplate.module.css";

export type TechStackGroup = {
  label: string;
  skills: string[];
};

type TechStackTemplateProps = {
  groups: TechStackGroup[];
};

const TechStackTemplate = ({ groups }: TechStackTemplateProps) => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Tech stack</h1>
      {groups.map((group) => (
        <SkillGroup key={group.label} label={group.label} skills={group.skills} />
      ))}
    </section>
  );
};

export default TechStackTemplate;
