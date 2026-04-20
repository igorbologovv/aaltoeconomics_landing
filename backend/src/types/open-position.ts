export type OpenPosition = {
  id: string;
  title: string;
  company: string;
  type: string;
  location: string;
  deadline: string;
  summary: string;
  description: string;
  logo?: string;
  applyUrl: string;
  isPublished: boolean;
  order: number;
};