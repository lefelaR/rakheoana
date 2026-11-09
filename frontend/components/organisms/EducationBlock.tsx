import type { Education } from "@models/profile";
import styles from "./EducationBlock.module.css";

type EducationBlockProps = {
  education: Education;
};

export default function EducationBlock({ education }: EducationBlockProps) {
  return (
    <section className={styles.block}>
      <h3 className={styles.school}>{education.school}</h3>
      <p>{education.qualification}</p>
      <p className={styles.period}>{education.period}</p>
    </section>
  );
}
