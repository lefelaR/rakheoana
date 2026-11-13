import { useEffect, useState } from "react";
import Link from "next/link";
import DashboardNavLink from "@components/molecules/DashboardNavLink";
import styles from "./DashboardSideNav.module.css";

export type DashboardNavItem = {
  href: string;
  label: string;
  icon: string;
};

export type DashboardNavGroup = {
  label: string;
  items: DashboardNavItem[];
};

type DashboardSideNavProps = {
  groups: DashboardNavGroup[];
  pathname: string;
};

const isCurrent = (href: string, pathname: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

const DashboardSideNav = ({ groups, pathname }: DashboardSideNavProps) => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="dashboard-side-nav"
        onClick={() => setOpen(true)}
      >
        <i className="lni lni-menu" aria-hidden="true" />
        <span className={styles.srOnly}>Open menu</span>
      </button>
      {open ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={close}
        />
      ) : null}
      <nav
        id="dashboard-side-nav"
        className={open ? `${styles.sideNav} ${styles.sideNavOpen}` : styles.sideNav}
        aria-label="Dashboard"
      >
        <div className={styles.brandRow}>
          <Link href="/dashboard" className={styles.brand} onClick={close}>
            Rakheoana
          </Link>
          <button type="button" className={styles.close} onClick={close}>
            <i className="lni lni-close" aria-hidden="true" />
            <span className={styles.srOnly}>Close menu</span>
          </button>
        </div>
        {groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <p className={styles.groupLabel}>{group.label}</p>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item.href}>
                  <DashboardNavLink
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={isCurrent(item.href, pathname)}
                    onNavigate={close}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );
};

export default DashboardSideNav;
