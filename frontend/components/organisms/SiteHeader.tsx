import Monogram from "@components/atoms/Monogram";
import TextLink from "@components/atoms/TextLink";
import NavLinks, { type NavItem } from "@components/molecules/NavLinks";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  name: string;
  initials: string;
  pathname: string;
  items: NavItem[];
};

export default function SiteHeader({ name, initials, pathname, items }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className={styles.brand}>
        <Monogram href="/" label={`${name}, home`}>
          {initials}
        </Monogram>
        <TextLink href="/">{name}</TextLink>
      </div>
      <NavLinks items={items} pathname={pathname} />
    </header>
  );
}
