import { ExperienceRecord } from "@models/experience.model";

export type ExperiencePayload = Omit<ExperienceRecord, "id" | "updatedAt">;

const normalizeEndDate = (value: unknown): string | null => {
	if (value === null || value === undefined) {
		return null;
	}
	const text = String(value).trim();
	return text.length === 0 ? null : text;
};

const normalizeHighlights = (value: unknown): string[] => {
	if (!Array.isArray(value)) {
		return [];
	}
	return value.map((line) => String(line).trim()).filter(Boolean);
};

export const parseExperiencePayload = (
	id: string,
	payload: ExperiencePayload
): ExperienceRecord | undefined => {
	const company = payload.company?.trim();
	const title = payload.title?.trim();
	const location = payload.location?.trim();
	const startDate = payload.startDate?.trim();
	const highlights = normalizeHighlights(payload.highlights);

	if (!company || !title || !location || !startDate || highlights.length === 0) {
		return undefined;
	}

	return {
		id,
		company,
		title,
		location,
		startDate,
		endDate: normalizeEndDate(payload.endDate),
		stack: payload.stack?.trim() || undefined,
		highlights,
	};
};