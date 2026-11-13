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

export const selectSkill = async (name: string): Promise<SkillRecord> => {
  const { data } = await http.post("/api/skills", { name });
  return data.data;
};

export const removeSkill = async (id: string): Promise<void> => {
  await http.delete(`/api/skills/${id}`);
};
