import type { ExperienceRole } from "@services/experienceService";
import styles from "./ExperienceRoleCard.module.css";

type ExperienceRoleCardProps = {
  role: ExperienceRole;
};

const formatRange = (start: string, end: string | null) =>
  end ? `${start} – ${end}` : `${start} – Present`;

const ExperienceRoleCard = ({ role }: ExperienceRoleCardProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.company}>{role.company}</h2>
        <p className={styles.title}>{role.title}</p>
        <p className={styles.meta}>
          <span>{formatRange(role.startDate, role.endDate)}</span>
          <span aria-hidden="true"> · </span>
          <span>{role.location}</span>
        </p>
      </header>
      {role.stack ? (
        <p className={styles.stack}>
          <span className={styles.stackLabel}>Stack</span>
          {role.stack}
        </p>
      ) : null}
      <ul className={styles.list}>
        {role.highlights.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceRoleCard;