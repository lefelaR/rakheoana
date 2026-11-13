import SkillGroup, { type Skill } from "@components/organisms/SkillGroup";
import styles from "./TechStackTemplate.module.css";

export type TechStackGroup = {
  label: string;
  skills: Skill[];
};

type TechStackTemplateProps = {
  groups: TechStackGroup[];
  pendingId?: string;
  onToggle?: (skill: Skill) => void;
};

const TechStackTemplate = ({ groups, pendingId, onToggle }: TechStackTemplateProps) => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Tech stack</h1>
      {groups.map((group) => (
        <SkillGroup
          key={group.label}
          label={group.label}
          skills={group.skills}
          pendingId={pendingId}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
};

export default TechStackTemplate;
