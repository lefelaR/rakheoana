import { experienceCatalog } from "@models/experienceCatalog";
import { listExperienceRecords } from "@repositories/experienceRepository";

export const listExperience = async () => {
	const records = await listExperienceRecords();
	const saved = new Map(records.map((record) => [record.id, record]));
	const catalogIds = new Set(experienceCatalog.map((role) => role.id));

	const fromCatalog = experienceCatalog.map((role) => {
		const override = saved.get(role.id);
		if (!override) {
			return role;
		}

		return {
			...role,
			...override,
			id: role.id,
			highlights: override.highlights?.length ? override.highlights : role.highlights,
		};
	});

	const custom = records
		.filter((record) => !catalogIds.has(record.id))
		.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));

	return [...custom, ...fromCatalog];
};