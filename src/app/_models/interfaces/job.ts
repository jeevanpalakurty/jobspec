export interface Job {
  startDate?: string;
  account: {
    email: string;
    confirm: string;
  };
};