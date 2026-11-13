import React, { type ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import DashboardSideNav from "@components/organisms/DashboardSideNav";
import styles from "./dashboardLayout.module.css";

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
        <DashboardSideNav groups={[]} pathname={pathname} />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}
