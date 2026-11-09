import SkillList from "@components/molecules/SkillList";
import type { SkillGroup as SkillGroupModel } from "@models/profile";
import styles from "./SkillGroup.module.css";

type SkillGroupProps = {
  group: SkillGroupModel;
};

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <section className={styles.group}>
      <h3 className={styles.name}>{group.name}</h3>
      <SkillList skills={group.skills} />
    </section>
  );
}
