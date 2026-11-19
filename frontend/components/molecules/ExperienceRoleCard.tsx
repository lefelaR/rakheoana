import type { CSSProperties } from "react";
import type { ExperienceRole } from "@services/experienceService";
import { sanitizeHighlight } from "./richText";
import styles from "./ExperienceRoleCard.module.css";

type ExperienceRoleCardProps = {
  role: ExperienceRole;
  className?: string;
  style?: CSSProperties;
};

const formatRange = (start: string, end: string | null) =>
  end ? `${start} – ${end}` : `${start} – Present`;

const ExperienceRoleCard = ({ role, className, style }: ExperienceRoleCardProps) => {
  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")} style={style}>
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
          <li key={line} dangerouslySetInnerHTML={{ __html: sanitizeHighlight(line) }} />
        ))}
      </ul>
    </article>
  );
};

export default ExperienceRoleCard;