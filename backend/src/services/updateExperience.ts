import { findCatalogExperience } from "@models/experienceCatalog";
import { putExperienceRecord, getExperienceRecord } from "@repositories/experienceRepository";
import { parseExperiencePayload, ExperiencePayload } from "@services/experienceRecord";

export const updateExperience = async (id: string, payload: ExperiencePayload) => {
	const known = findCatalogExperience(id) || (await getExperienceRecord(id));
	if (!known) {
		return undefined;
	}

	const record = parseExperiencePayload(id, payload);
	if (!record) {
		return undefined;
	}

	await putExperienceRecord(record);
	return record;
};