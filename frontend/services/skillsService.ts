import { catalogSkillGroups } from "../constants/skillCatalog";
import { http } from "./httpService";

export type SkillRecord = {
  id: string;
  name: string;
  group: string;
  selected: boolean;
};

export type SkillGroupRecord = {
  label: string;
  skills: SkillRecord[];
};

export const getSkills = async (): Promise<SkillGroupRecord[]> => {
  const { data } = await http.get("/api/skills");
  return data.data;
};

/** Groups and skills saved in DynamoDB (`selected: true`) for the public stack page. */
export const selectedSkillGroups = (groups: SkillGroupRecord[]): SkillGroupRecord[] =>
  groups
    .map((group) => ({
      ...group,
      skills: group.skills
        .filter((skill) => skill.selected)
        .map((skill) => ({ ...skill, selected: true })),
    }))
    .filter((group) => group.skills.length > 0);

/** Full catalog as card data when the API is unavailable (local dev, outages). */
export const getSkillCatalog = (): SkillGroupRecord[] => catalogSkillGroups();

export const selectSkill = async (name: string): Promise<SkillRecord> => {
  const { data } = await http.post("/api/skills", { name });
  return data.data;
};

export const removeSkill = async (id: string): Promise<void> => {
  await http.delete(`/api/skills/${id}`);
};
