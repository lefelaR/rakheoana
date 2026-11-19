import { experienceCatalog } from "../constants/experienceCatalog";
import type { ExperienceRole } from "../constants/experienceCatalog";
import { http } from "./httpService";

export type { ExperienceRole };

export const getExperienceCatalog = (): ExperienceRole[] => experienceCatalog;

export const getExperience = async (): Promise<ExperienceRole[]> => {
  const { data } = await http.get("/api/experience");
  if (Array.isArray(data?.data) && data.data.length > 0) {
    return data.data;
  }
  return experienceCatalog;
};

export type ExperienceRolePayload = Omit<ExperienceRole, "id">;

export const updateExperience = async (
  id: string,
  payload: ExperienceRolePayload
): Promise<ExperienceRole> => {
  const { data } = await http.put(`/api/experience/${id}`, payload);
  return data.data;
};

export const createExperience = async (
  payload: ExperienceRolePayload
): Promise<ExperienceRole> => {
  const { data } = await http.post("/api/experience", payload);
  return data.data;
};

export const isDraftExperienceId = (id: string) => id.startsWith("new-");

export const createBlankExperienceRole = (): ExperienceRole => ({
  id: `new-${Date.now()}`,
  company: "",
  title: "",
  location: "",
  startDate: "",
  endDate: null,
  stack: "",
  highlights: [""],
});