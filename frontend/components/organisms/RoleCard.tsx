import RoleMeta from "@components/molecules/RoleMeta";
import SkillList from "@components/molecules/SkillList";
import type { ExperienceRole } from "@models/profile";
import styles from "./RoleCard.module.css";

type RoleCardProps = {
  role: ExperienceRole;
  index: number;
};

export default function RoleCard({ role, index }: RoleCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.company}>{role.company}</h3>
        <p className={styles.index}>{String(index).padStart(2, "0")}</p>
      </div>
      <div>
        <p className={styles.role}>{role.role}</p>
        <RoleMeta period={role.period} location={role.location} />
        <ul className={styles.bullets}>
          {role.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <SkillList skills={role.stack} />
      </div>
    </article>
  );
}
