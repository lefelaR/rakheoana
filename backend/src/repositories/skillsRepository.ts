import DynamoDatabaseService from "@services/DynamoDatabaseService";
import { SkillRecord } from "@models/skill.model";

const TableName = process.env.SKILLS_TABLE;

export const listSkillRecords = async (): Promise<SkillRecord[]> => {
	const result = await DynamoDatabaseService.scan({ TableName });
	return (result.Items ?? []) as SkillRecord[];
};

export const putSkillRecord = async (skill: SkillRecord): Promise<SkillRecord> => {
	const record = { ...skill, createdAt: Date.now() };
	await DynamoDatabaseService.create({
		TableName,
		Item: record,
	});
	return record;
};

export const deleteSkillRecord = async (id: string): Promise<void> => {
	await DynamoDatabaseService.delete({
		TableName,
		Key: { id },
	});
};
