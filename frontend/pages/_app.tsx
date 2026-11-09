import type { AppProps } from "next/app";
import Head from "next/head";
import { DM_Sans } from "next/font/google";
import SiteFooter from "@components/organisms/SiteFooter";
import SiteHeader from "@components/organisms/SiteHeader";
import type { NavItem } from "@components/molecules/NavLinks";
import { profile } from "@content/profile";
import "../styles/globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const navItems: NavItem[] = [
  { href: "/", label: "Home", mark: "RL", tone: "home" },
  { href: "/experience", label: "Experience", mark: "Ex", tone: "experience" },
  { href: "/stack", label: "Stack", mark: "St", tone: "stack" },
  { href: "/portfolio", label: "Portfolio", mark: "Wk", tone: "portfolio" },
  { href: "/blog", label: "Blog", mark: "Bl", tone: "blog" },
  { href: "/contact", label: "Contact", mark: "Hi", tone: "contact" },
  { href: profile.contact.linkedin, label: "LinkedIn", mark: "in", tone: "linkedin", external: true },
  { href: `mailto:${profile.contact.email}`, label: "Email", mark: "@", tone: "mail", external: true },
];

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${sans.variable} shell`}>
      <Head>
        <title>Rakheoana Lefela</title>
        <meta name="description" content={profile.summary} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <SiteHeader availability={profile.availability} pathname={router.pathname} items={navItems} />
      <main id="content">
        <Component {...pageProps} />
      </main>
      <SiteFooter name={profile.name} location={profile.location} availability={profile.availability} />
    </div>
  );
}
