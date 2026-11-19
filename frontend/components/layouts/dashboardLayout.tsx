import React, { type ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { LuBriefcase, LuImages, LuLayers } from "react-icons/lu";
import Icon from "@components/atoms/Icon";
import Breadcrumbs, { type BreadcrumbItem } from "@components/molecules/Breadcrumbs";
import { Toaster } from "react-hot-toast";
import DashboardSideNav, {
  type DashboardNavGroup,
} from "@components/organisms/DashboardSideNav";
import styles from "./dashboardLayout.module.css";

const groups: DashboardNavGroup[] = [
  {
    label: "",
    items: [
      { href: "/dashboard/experience", label: "Experience", icon: <Icon icon={LuBriefcase} /> },
      { href: "/dashboard/portfolio", label: "Portfolio", icon: <Icon icon={LuImages} /> },
      { href: "/dashboard/stack", label: "Tech stack", icon: <Icon icon={LuLayers} /> },
    ],
  },
];

const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/$/, "") : path);

const breadcrumbItems = (pathname: string): BreadcrumbItem[] => {
  const path = normalizePath(pathname);
  const section = groups
    .flatMap((group) => group.items)
    .find((item) => {
      const href = normalizePath(item.href);
      return path === href || path.startsWith(`${href}/`);
    });

  return [
    { href: "/dashboard", label: "Dashboard" },
    ...(section ? [{ href: section.href, label: section.label }] : []),
  ];
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Rakheoana Lefela | Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className={styles.shell}>
        <DashboardSideNav groups={groups} pathname={pathname} />
        <div className={styles.content}>
          <Breadcrumbs items={breadcrumbItems(pathname)} />
          {children}
        </div>
      </div>
    </>
  );
}
