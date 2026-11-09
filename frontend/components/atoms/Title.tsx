import styles from "./Title.module.css";

type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
