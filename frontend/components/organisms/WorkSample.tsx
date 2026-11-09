import styles from "./WorkSample.module.css";

type WorkSampleProps = {
  context: string;
  detail: string;
};

export default function WorkSample({ context, detail }: WorkSampleProps) {
  return (
    <article className={styles.sample}>
      <p className={styles.context}>{context}</p>
      <p className={styles.detail}>{detail}</p>
    </article>
  );
}
