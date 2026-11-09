import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: React.ReactNode;
};

export default function Eyebrow({ children }: EyebrowProps) {
  return <p className={styles.eyebrow}>{children}</p>;
}
