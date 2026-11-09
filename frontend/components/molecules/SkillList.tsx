import Badge from "@components/atoms/Badge";
import styles from "./SkillList.module.css";

type SkillListProps = {
  skills: string[];
};

export default function SkillList({ skills }: SkillListProps) {
  return (
    <ul className={styles.list}>
      {skills.map((skill) => (
        <li key={skill}>
          <Badge>{skill}</Badge>
        </li>
      ))}
    </ul>
  );
}
