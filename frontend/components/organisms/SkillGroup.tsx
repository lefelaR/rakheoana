import type { ReactNode } from "react";
import SkillTile from "@components/molecules/SkillTile";
import styles from "./SkillGroup.module.css";

export type Skill = {
  name: string;
  icon: ReactNode;
};

type SkillGroupProps = {
  label: string;
  skills: Skill[];
};

const headingId = (label: string) =>
  `skill-group-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const SkillGroup = ({ label, skills }: SkillGroupProps) => {
  const id = headingId(label);

  return (
    <section className={styles.group} aria-labelledby={id}>
      <h2 id={id} className={styles.label}>
        {label}
      </h2>
      <ul className={styles.grid}>
        {skills.map((skill) => (
          <li key={skill.name}>
            <SkillTile name={skill.name} icon={skill.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillGroup;
