import { PortfolioPeriod, PortfolioRecord } from "@models/portfolio.model";
import { portfolioPeriods } from "@models/portfolioCatalog";

export type PortfolioPayload = Omit<PortfolioRecord, "id" | "updatedAt">;

const optionalText = (value: unknown): string | undefined => {
	if (value === null || value === undefined) {
		return undefined;
	}
	const text = String(value).trim();
	return text.length === 0 ? undefined : text;
};

const parsePeriod = (value: unknown): PortfolioPeriod | undefined => {
	const period = String(value ?? "").trim();
	return portfolioPeriods.includes(period as PortfolioPeriod)
		? (period as PortfolioPeriod)
		: undefined;
};

export const parsePortfolioPayload = (
	id: string,
	payload: PortfolioPayload
): PortfolioRecord | undefined => {
	const title = payload.title?.trim();
	const period = parsePeriod(payload.period);

	if (!title || !period) {
		return undefined;
	}

	return {
		id,
		title,
		period,
		credit: optionalText(payload.credit),
		url: optionalText(payload.url),
		image: optionalText(payload.image),
	};
};
