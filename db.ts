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

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Tuition Terminal",
    description: "My first portfolio website",
    gitLink: null,
    imageLink: "https://i.postimg.cc/8PH32G8M/tterminal.png",
    liveLink: "https://tuitionterminal.com.bd/",
    workDuration: "1 week",
    tags: ["react", "javascript", "vite", "bootstrap5", "redux"],
  },
  {
    id: 2,
    name: "Porao",
    description: "My first portfolio website",
    gitLink: null,
    imageLink: "https://i.postimg.cc/Hx68GjtF/tterminal-1.png",
    liveLink: "https://porao.vercel.app",
    workDuration: "1 week",
    tags: [
      "react",
      "typescript",
      "vite",
      "tailwindcss",
      "react-query",
      "zustand",
    ],
  },
  {
    id: 3,
    name: "Taiuun",
    description: "My first portfolio website",
    gitLink: null,
    imageLink: "https://i.postimg.cc/m2Kn7d1Y/taiuun-job-hunting.png",
    liveLink: null,
    workDuration: "1 week",
    tags: ["react", "javascript", "vite", "tailwindcss", "nextjs", "redux"],
  },
  {
    id: 4,
    name: "FiberX",
    description: "My first portfolio website",
    gitLink: null,
    imageLink: "https://i.postimg.cc/vHRNVzRY/fiverx.jpg",
    liveLink: null,
    workDuration: "1 week",
    tags: ["Golang", "Fiber"],
  },
];
