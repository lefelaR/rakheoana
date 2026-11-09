import RoleCard from "@components/organisms/RoleCard";
import SectionHeading from "@components/atoms/SectionHeading";
import type { ExperienceRole } from "@models/profile";
import styles from "./ExperienceTemplate.module.css";

type ExperienceTemplateProps = {
  roles: ExperienceRole[];
};

export default function ExperienceTemplate({ roles }: ExperienceTemplateProps) {
  return (
    <div className={`page ${styles.page}`}>
      <SectionHeading>Experience</SectionHeading>
      <p className={styles.lede}>Nine years across six roles, newest first.</p>
      <div className={styles.list}>
        {roles.map((role, index) => (
          <RoleCard key={role.company} role={role} index={index + 1} />
        ))}
      </div>
    </div>
  );
}
