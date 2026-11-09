import SkillList from "@components/molecules/SkillList";
import type { Profile } from "@models/profile";
import styles from "./TargetRoles.module.css";

type TargetRolesProps = {
  profile: Profile;
};

export default function TargetRoles({ profile }: TargetRolesProps) {
  return (
    <section className={styles.panel}>
      <div>
        <h2 className={styles.heading}>What I&apos;m looking for</h2>
        <p className={styles.roles}>{profile.targetRoles.join(", ")}</p>
        <p className={styles.modes}>{profile.workModes}</p>
      </div>
      <SkillList skills={profile.strengths} />
    </section>
  );
}
