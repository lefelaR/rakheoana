import SkillTile from "@components/molecules/SkillTile";
import styles from "./SkillGroup.module.css";

export type Skill = {
  id: string;
  name: string;
  selected: boolean;
};

type SkillGroupProps = {
  label: string;
  skills: Skill[];
  pendingId?: string;
  onToggle?: (skill: Skill) => void;
  /** Public site: Bootstrap row/cols. Dashboard: CSS grid. */
  layout?: "grid" | "bootstrap";
};

const headingId = (label: string) =>
  `skill-group-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const SkillGroup = ({
  label,
  skills,
  pendingId,
  onToggle,
  layout = "grid",
}: SkillGroupProps) => {
  const id = headingId(label);
  const bootstrap = layout === "bootstrap";

  return (
    <section className={styles.group} aria-labelledby={id}>
      <h2 id={id} className={styles.label}>
        {label}
      </h2>
      <ul className={bootstrap ? `row ${styles.bootstrapList}` : styles.grid}>
        {skills.map((skill) => (
          <li
            key={skill.id}
            className={
              bootstrap ? "col-lg-3 col-md-6 col-sm-12" : undefined
            }
          >
            <SkillTile
              name={skill.name}
              selected={skill.selected}
              disabled={pendingId === skill.id}
              onToggle={onToggle ? () => onToggle(skill) : undefined}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillGroup;
