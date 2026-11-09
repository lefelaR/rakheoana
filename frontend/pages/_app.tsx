import type { AppProps } from "next/app";
import Head from "next/head";
import { Newsreader, Outfit } from "next/font/google";
import SiteFooter from "@components/organisms/SiteFooter";
import SiteHeader from "@components/organisms/SiteHeader";
import type { NavItem } from "@components/molecules/NavLinks";
import { profile } from "@content/profile";
import "../styles/globals.css";

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/stack", label: "Stack" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${sans.variable} ${serif.variable} shell`}>
      <Head>
        <title>Rakheoana Lefela</title>
        <meta name="description" content={profile.summary} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <SiteHeader name={profile.name} initials="RL" pathname={router.pathname} items={navItems} />
      <main id="content">
        <Component {...pageProps} />
      </main>
      <SiteFooter name={profile.name} location={profile.location} availability={profile.availability} />
    </div>
  );
}
