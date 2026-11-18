import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./DashboardNavLink.module.css";

export type DashboardNavLinkProps = {
  href?: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
  onNavigate?: () => void;
  /** Runs for action links (e.g. log out) instead of routing. */
  onAction?: () => void;
};

const linkClass = (active?: boolean) =>
  active ? `${styles.link} ${styles.active}` : styles.link;

const DashboardNavLink = ({
  href,
  label,
  icon,
  active = false,
  onNavigate,
  onAction,
}: DashboardNavLinkProps) => {
  const content = (
    <>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </>
  );

  if (onAction) {
    return (
      <button
        type="button"
        className={linkClass(active)}
        onClick={() => {
          onAction();
          onNavigate?.();
        }}
      >
        {content}
      </button>
    );
  }

  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      className={linkClass(active)}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
    >
      {content}
    </Link>
  );
};

export default DashboardNavLink;
