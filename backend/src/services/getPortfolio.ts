import { findCatalogPortfolio } from "@models/portfolioCatalog";
import { getPortfolioRecord } from "@repositories/portfolioRepository";

export const getPortfolio = async (id: string) => {
	const catalog = findCatalogPortfolio(id);
	const saved = await getPortfolioRecord(id);

	if (saved?.hidden) {
		return undefined;
	}

	if (catalog) {
		if (!saved) {
			return catalog;
		}

		return {
			...catalog,
			...saved,
			id: catalog.id,
			hidden: undefined,
		};
	}

	return saved;
};
