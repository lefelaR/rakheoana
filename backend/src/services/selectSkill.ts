import { findCatalogSkill } from "@models/skillCatalog";
import { putSkillRecord } from "@repositories/skillsRepository";

export const selectSkill = async (name: string) => {
	const skill = findCatalogSkill(name);
	if (!skill) {
		return undefined;
	}

	await putSkillRecord(skill);
	return { ...skill, selected: true };
};
