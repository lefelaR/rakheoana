import { findCatalogExperience } from "@models/experienceCatalog";
import { getExperienceRecord } from "@repositories/experienceRepository";

export const getExperience = async (id: string) => {
	const catalog = findCatalogExperience(id);
	const saved = await getExperienceRecord(id);

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
			highlights: saved.highlights?.length ? saved.highlights : catalog.highlights,
		};
	}

	return saved;
};
