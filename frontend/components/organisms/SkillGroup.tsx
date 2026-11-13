import SkillTile from "@components/atoms/SkillTile";
import styles from "./SkillGroup.module.css";

type SkillGroupProps = {
  label: string;
  skills: string[];
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
          <li key={skill}>
            <SkillTile name={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillGroup;
