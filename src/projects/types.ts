// src/projects/types.ts (No changes needed from previous step)

export interface FeatureItem {
  title: string;
  description: string;
  screenshots?: string[]; // Optional array of screenshot URLs
}

export interface ProjectSection {
  id: string;
  title: string;
  content: React.ReactNode | FeatureItem[]; // Can be JSX or an array of FeatureItem
}

export interface ProjectData {
  title: string;
  company: string;
  year: string;
  description: string;
  image: string;
  website?: string; // Optional website link (for agencies, this can be LinkedIn or their own site)
  logo?: string;
  sections: ProjectSection[];
}