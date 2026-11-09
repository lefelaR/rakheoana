import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  name: string;
  location: string;
  availability: string;
};

export default function SiteFooter({ name, location, availability }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} {name}</p>
      <p>
        {location}. {availability}.
      </p>
    </footer>
  );
}
