import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export type BreadcrumbItem = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const current = index === items.length - 1;

          return (
            <li key={item.href} className={styles.item}>
              {current ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
