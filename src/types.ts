export interface ProjectType {
    id: number;
    name: string;
    description?: string;
    gitLink?: string | null;
    imageLink: string;
    liveLink?: string | null;
    workDuration: string;
    tags: string[];
  }
  
  