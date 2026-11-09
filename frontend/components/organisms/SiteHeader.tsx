import Eyebrow from "@components/atoms/Eyebrow";
import NavLinks, { type NavItem } from "@components/molecules/NavLinks";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  availability: string;
  pathname: string;
  items: NavItem[];
};

export default function SiteHeader({ availability, pathname, items }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className={styles.status}>
        <Eyebrow>{availability}</Eyebrow>
      </div>
      <div className={styles.dock}>
        <NavLinks items={items} pathname={pathname} />
      </div>
    </header>
  );
}
