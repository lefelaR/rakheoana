export type PortfolioPeriod = "past" | "current" | "future";

export type PortfolioRecord = {
	id: string;
	title: string;
	credit?: string;
	url?: string;
	image?: string;
	period: PortfolioPeriod;
	hidden?: boolean;
	updatedAt?: number;
};
