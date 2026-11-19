import { findCatalogSkillById } from "@models/skillCatalog";
import { listSkillRecords } from "@repositories/skillsRepository";

export const getSkill = async (id: string) => {
	const skill = findCatalogSkillById(id);
	if (!skill) {
		return undefined;
	}

	const records = await listSkillRecords();
	return {
		...skill,
		selected: records.some((record) => record.id === id),
	};
};
