export type ExperienceRecord = {
	id: string;
	company: string;
	title: string;
	location: string;
	startDate: string;
	endDate: string | null;
	stack?: string;
	highlights: string[];
	updatedAt?: number;
};