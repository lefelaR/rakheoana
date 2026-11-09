import styles from "./Monogram.module.css";

type MonogramProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export default function Monogram({ href, label, children }: MonogramProps) {
  return (
    <a className={styles.mark} href={href} aria-label={label}>
      {children}
    </a>
  );
}
