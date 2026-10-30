export type Status = 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';

export const STATUSES: Status[] = ['Applied', 'Interviewing', 'Offer', 'Rejected'];

export interface Application {
  id: string;
  company: string;
  role: string;
  location: string;
  status: Status;
  dateApplied: string;
}