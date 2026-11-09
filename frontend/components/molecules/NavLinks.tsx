import TextLink from "@components/atoms/TextLink";
import styles from "./NavLinks.module.css";

export type NavTone = "home" | "experience" | "stack" | "portfolio" | "blog" | "contact" | "linkedin" | "mail";

export type NavItem = {
  href: string;
  label: string;
  mark: string;
  tone: NavTone;
  external?: boolean;
};

type NavLinksProps = {
  items: NavItem[];
  pathname: string;
};

export default function NavLinks({ items, pathname }: NavLinksProps) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      {items.map((item) => (
        <TextLink
          key={item.href}
          href={item.href}
          current={pathname === item.href}
          target={item.external ? "_blank" : undefined}
          className={item.tone === "linkedin" ? styles.social : undefined}
        >
          <span className={styles.tile} data-tone={item.tone} aria-hidden="true">
            {item.mark}
          </span>
          <span className={styles.label}>{item.label}</span>
        </TextLink>
      ))}
    </nav>
  );
}
