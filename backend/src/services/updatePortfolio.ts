import { findCatalogPortfolio } from "@models/portfolioCatalog";
import { getPortfolioRecord, putPortfolioRecord } from "@repositories/portfolioRepository";
import { parsePortfolioPayload, PortfolioPayload } from "@services/portfolioRecord";

export const updatePortfolio = async (id: string, payload: PortfolioPayload) => {
	const known = findCatalogPortfolio(id) || (await getPortfolioRecord(id));
	if (!known) {
		return undefined;
	}

	const record = parsePortfolioPayload(id, payload);
	if (!record) {
		return undefined;
	}

	await putPortfolioRecord(record);
	return record;
};
