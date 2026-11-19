import { findCatalogExperience } from "@models/experienceCatalog";
import {
	deleteExperienceRecord,
	getExperienceRecord,
	putExperienceRecord,
} from "@repositories/experienceRepository";

export const deleteExperience = async (id: string) => {
	const catalog = findCatalogExperience(id);
	const saved = await getExperienceRecord(id);

	if (saved?.hidden || (!catalog && !saved)) {
		return undefined;
	}

	if (catalog) {
		await putExperienceRecord({ ...catalog, hidden: true });
		return { id };
	}

	await deleteExperienceRecord(id);
	return { id };
};
