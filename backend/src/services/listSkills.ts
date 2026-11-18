import { skillCatalog, skillId } from "@models/skillCatalog";
import { listSkillRecords } from "@repositories/skillsRepository";

export const listSkills = async () => {
	const records = await listSkillRecords();
	const selected = new Set(records.map((record) => record.id));

	return skillCatalog.map((group) => ({
		label: group.label,
		skills: group.skills.map((name) => ({
			id: skillId(name),
			name,
			group: group.label,
			selected: selected.has(skillId(name)),
		})),
	}));
};
