import { education as localEducation, experience as localExperience, profile as localProfile, skills as localSkills } from "@content/profile";
import type { ContactMessage, Education, ExperienceRole, Profile, SkillGroup } from "@models/profile";
import { hasApi, http } from "@services/httpService";

export async function getProfile(): Promise<Profile> {
  if (!hasApi()) return localProfile;
  const { data } = await http.get<Profile>("/api/profile");
  return data;
}

export async function getExperience(): Promise<ExperienceRole[]> {
  if (!hasApi()) return localExperience;
  const { data } = await http.get<ExperienceRole[]>("/api/experience");
  return data;
}

export async function getSkills(): Promise<SkillGroup[]> {
  if (!hasApi()) return localSkills;
  const { data } = await http.get<SkillGroup[]>("/api/skills");
  return data;
}

export async function getEducation(): Promise<Education> {
  if (!hasApi()) return localEducation;
  const { data } = await http.get<Education>("/api/education");
  return data;
}

export async function sendContact(message: ContactMessage): Promise<void> {
  if (!hasApi()) {
    throw new Error("The contact form posts to /api/contact. Set NEXT_PUBLIC_BASE_API_ENDPOINT to the API Gateway stage root.");
  }
  await http.post("/api/contact", message);
}
