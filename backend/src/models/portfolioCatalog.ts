import { PortfolioRecord } from "./portfolio.model";

export const portfolioPeriods = ["past", "current", "future"] as const;

export const portfolioCatalog: PortfolioRecord[] = [
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

export const findCatalogPortfolio = (id: string) =>
	portfolioCatalog.find((project) => project.id === id);

export const portfolioId = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
