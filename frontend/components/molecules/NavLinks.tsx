import TextLink from "@components/atoms/TextLink";
import styles from "./NavLinks.module.css";

export type NavItem = {
  href: string;
  label: string;
};

type NavLinksProps = {
  items: NavItem[];
  pathname: string;
};

export default function NavLinks({ items, pathname }: NavLinksProps) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      {items.map((item) => (
        <TextLink key={item.href} href={item.href} current={pathname === item.href}>
          {item.label}
        </TextLink>
      ))}
    </nav>
  );
}
