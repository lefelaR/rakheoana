export type PortfolioPeriod = "past" | "current" | "future";

export type PortfolioProject = {
  id: string;
  title: string;
  credit?: string;
  url?: string;
  image?: string;
  period: PortfolioPeriod;
};

export const portfolioPeriods: { id: PortfolioPeriod; label: string }[] = [
  { id: "past", label: "Past projects" },
  { id: "current", label: "Current projects" },
  { id: "future", label: "Future projects" },
];

/** Work samples already on the public portfolio page. Clients are not employers. */
export const portfolioCatalog: PortfolioProject[] = [
  {
    id: "isu-technologies",
    title: "ISU Technologies",
    credit: "Lucidocean",
    url: "https://www.isutech.co.za/",
    image: "/images/work/isutech.png",
    period: "past",
  },
  {
    id: "hci-foundation",
    title: "HCI Foundation",
    credit: "Lucidocean",
    url: "http://www.hcifoundation.co.za/",
    image: "/images/work/HCIfoundation.png",
    period: "past",
  },
  {
    id: "tm-town-planning",
    title: "Town planning consultancy website",
    url: "https://www.tmtownplanning.co.za/",
    image: "/images/work/tmSquare.png",
    period: "past",
  },
  {
    id: "movie-website",
    title: "Movie website",
    url: "https://preware-git-staging-lefelar.vercel.app/",
    image: "/images/work/reactSmall.png",
    period: "past",
  },
  {
    id: "witaxi",
    title: "wiTaxi",
    credit: "Simple Freight",
    url: "http://www.witaxi.co.za",
    image: "/images/work/Wi-Taxi - Full Logo.png",
    period: "past",
  },
];
