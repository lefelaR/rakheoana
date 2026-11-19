import { findCatalogSkillById } from "@models/skillCatalog";
import { deleteSkillRecord } from "@repositories/skillsRepository";
import { selectSkill } from "@services/selectSkill";

export const updateSkill = async (id: string, selected: boolean) => {
	const skill = findCatalogSkillById(id);
	if (!skill) {
		return undefined;
	}

	if (selected) {
		return selectSkill(skill.name);
	}

	await deleteSkillRecord(id);
	return { ...skill, selected: false };
};
