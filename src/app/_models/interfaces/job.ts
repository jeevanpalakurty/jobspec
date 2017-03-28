export interface Job {
  startDate?: Date;
  jobTitleId: string;
  skillsId: string;
  employerId: string;
  trainingCourses: string;
  jobDescription: string;
  applicationDeadline: Date;
  projectDuration: string;
  projectValue: Number;
  projectTypeId: string;
  projectLocation?: string;
  salary: Number;
  experience: Number;
};
