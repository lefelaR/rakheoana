import DynamoDatabaseService from "@services/DynamoDatabaseService";
import { ExperienceRecord } from "@models/experience.model";

const TableName = process.env.EXPERIENCE_TABLE;

export const listExperienceRecords = async (): Promise<ExperienceRecord[]> => {
	const result = await DynamoDatabaseService.scan({ TableName });
	return (result.Items ?? []) as ExperienceRecord[];
};

export const getExperienceRecord = async (
	id: string
): Promise<ExperienceRecord | undefined> => {
	const result = await DynamoDatabaseService.get({
		TableName,
		Key: { id },
	});
	return result.Item as ExperienceRecord | undefined;
};

export const putExperienceRecord = async (
	record: ExperienceRecord
): Promise<ExperienceRecord> => {
	const item = { ...record, updatedAt: Date.now() };
	await DynamoDatabaseService.create({
		TableName,
		Item: item,
	});
	return item;
};

export const deleteExperienceRecord = async (id: string): Promise<void> => {
	await DynamoDatabaseService.delete({
		TableName,
		Key: { id },
	});
};