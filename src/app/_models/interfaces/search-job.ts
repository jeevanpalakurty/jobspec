export interface SearchJobRequest {
  startDate?: Date;
  jobTitle?: string;
  skills: string;
  category?: string;
  projectType?: string;
  projectLocation: string;
  salary?: Number;
};
