export interface ProjectType {
  id: number;
  name: string;
  description: string;
  gitLink: string;
  imageLink: string;
  liveLink: string;
  workDuration: string;
  tags: string[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Tuition Terminal",
    description: "My first portfolio website",
    gitLink: "#",
    imageLink: "/tt.png",
    liveLink: "https://tuitionterminal.com.bd/",
    workDuration: "1 week",
    tags: ["react", "javascript", "vite", "bootstrap5", "react-query", "redux"],
  },
  {
    id: 2,
    name: "Porao",
    description: "My first portfolio website",
    gitLink: "#",
    imageLink: "/porao.png",
    liveLink: "https://porao.vercel.app",
    workDuration: "1 week",
    tags: [
      "react",
      "javascript",
      "vite",
      "tailwindcss",
      "react-query",
      "redux",
    ],
  },
];
