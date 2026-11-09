export type ContactDetails = {
  email: string;
  phone: string;
  linkedin: string;
  site: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  relocate: string;
  availability: string;
  years: string;
  summary: string;
  contact: ContactDetails;
  targetRoles: string[];
  strengths: string[];
  workModes: string;
};

export type ExperienceRole = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Education = {
  school: string;
  qualification: string;
  period: string;
};

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};
