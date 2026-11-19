import DynamoDatabaseService from "@services/DynamoDatabaseService";
import { PortfolioRecord } from "@models/portfolio.model";

const TableName = process.env.PORTFOLIO_TABLE;

export const listPortfolioRecords = async (): Promise<PortfolioRecord[]> => {
	const result = await DynamoDatabaseService.scan({ TableName });
	return (result.Items ?? []) as PortfolioRecord[];
};

export const getPortfolioRecord = async (
	id: string
): Promise<PortfolioRecord | undefined> => {
	const result = await DynamoDatabaseService.get({
		TableName,
		Key: { id },
	});
	return result.Item as PortfolioRecord | undefined;
};

export const putPortfolioRecord = async (
	record: PortfolioRecord
): Promise<PortfolioRecord> => {
	const item = { ...record, updatedAt: Date.now() };
	await DynamoDatabaseService.create({
		TableName,
		Item: item,
	});
	return item;
};

export const deletePortfolioRecord = async (id: string): Promise<void> => {
	await DynamoDatabaseService.delete({
		TableName,
		Key: { id },
	});
};
