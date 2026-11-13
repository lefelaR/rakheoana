import { skillCatalog, skillId } from "@models/skillCatalog";
import { deleteSkillRecord } from "@repositories/skillsRepository";

export const removeSkill = async (id: string) => {
	const known = skillCatalog.some((group) =>
		group.skills.some((name) => skillId(name) === id)
	);
	if (!known) {
		return undefined;
	}

	await deleteSkillRecord(id);
	return { id, selected: false };
};
