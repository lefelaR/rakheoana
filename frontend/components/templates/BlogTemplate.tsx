import SectionHeading from "@components/atoms/SectionHeading";
import styles from "./BlogTemplate.module.css";

export default function BlogTemplate() {
  return (
    <div className={`page ${styles.page}`}>
      <SectionHeading>Blog</SectionHeading>
      <p className={styles.empty}>No posts yet.</p>
    </div>
  );
}
