import { portfolioCatalog } from "@models/portfolioCatalog";
import { listPortfolioRecords } from "@repositories/portfolioRepository";

export const listPortfolio = async () => {
	const records = await listPortfolioRecords();
	const saved = new Map(records.map((record) => [record.id, record]));
	const catalogIds = new Set(portfolioCatalog.map((project) => project.id));

	const fromCatalog = portfolioCatalog.map((project) => {
		const override = saved.get(project.id);
		if (!override) {
			return project;
		}

		return {
			...project,
			...override,
			id: project.id,
		};
	});

	const custom = records
		.filter((record) => !catalogIds.has(record.id))
		.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));

	return [...custom, ...fromCatalog];
};
