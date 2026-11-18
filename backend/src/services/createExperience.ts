import { experienceId, findCatalogExperience } from "@models/experienceCatalog";
import {
	getExperienceRecord,
	putExperienceRecord,
} from "@repositories/experienceRepository";
import { parseExperiencePayload, ExperiencePayload } from "@services/experienceRecord";

const uniqueId = async (company: string) => {
	let id = experienceId(company);
	if (!id) {
		id = `role-${Date.now()}`;
	}

	if (findCatalogExperience(id) || (await getExperienceRecord(id))) {
		id = `${id}-${Date.now()}`;
	}

	return id;
};

export const createExperience = async (payload: ExperiencePayload) => {
	const company = payload.company?.trim();
	if (!company) {
		return undefined;
	}

	const id = await uniqueId(company);
	const record = parseExperiencePayload(id, payload);
	if (!record) {
		return undefined;
	}

	await putExperienceRecord(record);
	return record;
};