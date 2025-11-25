export interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  location: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  role?: string;
  dates: string;
  location: string;
  description: string;
  bullets?: string[];
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  dates: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    location: string;
  };
  summary: string;
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  languages: string[];
}