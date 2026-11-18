import { findCatalogPortfolio, portfolioId } from "@models/portfolioCatalog";
import {
	getPortfolioRecord,
	putPortfolioRecord,
} from "@repositories/portfolioRepository";
import { parsePortfolioPayload, PortfolioPayload } from "@services/portfolioRecord";

const uniqueId = async (title: string) => {
	let id = portfolioId(title);
	if (!id) {
		id = `project-${Date.now()}`;
	}

	if (findCatalogPortfolio(id) || (await getPortfolioRecord(id))) {
		id = `${id}-${Date.now()}`;
	}

	return id;
};

export const createPortfolio = async (payload: PortfolioPayload) => {
	const title = payload.title?.trim();
	if (!title) {
		return undefined;
	}

	const id = await uniqueId(title);
	const record = parsePortfolioPayload(id, payload);
	if (!record) {
		return undefined;
	}

	await putPortfolioRecord(record);
	return record;
};
