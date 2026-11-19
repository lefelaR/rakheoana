import { findCatalogPortfolio } from "@models/portfolioCatalog";
import {
	deletePortfolioRecord,
	getPortfolioRecord,
	putPortfolioRecord,
} from "@repositories/portfolioRepository";

export const deletePortfolio = async (id: string) => {
	const catalog = findCatalogPortfolio(id);
	const saved = await getPortfolioRecord(id);

	if (saved?.hidden || (!catalog && !saved)) {
		return undefined;
	}

	if (catalog) {
		await putPortfolioRecord({ ...catalog, hidden: true });
		return { id };
	}

	await deletePortfolioRecord(id);
	return { id };
};
