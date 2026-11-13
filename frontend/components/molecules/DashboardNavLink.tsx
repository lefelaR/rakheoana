import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./DashboardNavLink.module.css";

export type DashboardNavLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  active: boolean;
  onNavigate: () => void;
};

const DashboardNavLink = ({
  href,
  label,
  icon,
  active,
  onNavigate,
}: DashboardNavLinkProps) => {
  return (
    <Link
      href={href}
      className={active ? `${styles.link} ${styles.active}` : styles.link}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
};

export default DashboardNavLink;
