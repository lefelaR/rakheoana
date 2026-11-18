import SkillGroup, { type Skill } from "@components/organisms/SkillGroup";
import styles from "./TechStackTemplate.module.css";

export type TechStackGroup = {
  label: string;
  skills: Skill[];
};

type TechStackTemplateProps = {
  groups: TechStackGroup[];
  pendingId?: string;
  catalogOnly?: boolean;
  status?: string;
  onToggle?: (skill: Skill) => void;
};

const TechStackTemplate = ({
  groups,
  pendingId,
  catalogOnly,
  status,
  onToggle,
}: TechStackTemplateProps) => {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tech stack</h1>
        <p className={styles.lead}>
          Every programming technology in the catalog is a card you can press. Selected cards appear
          on your public stack page.
        </p>
        {status ? (
          <p className={catalogOnly ? styles.notice : styles.status} role="status">
            {status}
          </p>
        ) : null}
      </header>
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
