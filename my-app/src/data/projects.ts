interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    image?: string;
    repoLink?: string; //github / gitlab
    tags?: string[];                   // Tags for filtering/searching
    codingTags?: string[];           // java, etc
    startDate?: string;                // e.g., "2024-01-15"
    endDate?: string;                  // Optional end date
    featured?: boolean;                // Highlight featured projects
    client?: string;                   // Client or team info
    status?: 'Completed' | 'In Progress';
    priority?: number;                 // Optional for ordering
}

export const projects: Project[] = [
  {
    id: '1',
    title: "Tower Defense Game",
    shortDescription: "A JavaFX tower defense game built with a teammate.",
    description: "Implemented enemy AI, pathfinding, and wave mechanics...",
    image: "/assets/tower-defense.png",
    //repoLink: "https://github.com/yourusername/tower-defense",
    tags: ["Game", "Team Project"],
    codingTags: ["Java", "JavaFX"],
    startDate: "2023-08-01",
    endDate: "2023-10-01",
    featured: true,
    client: "University Project",
    status: "Completed",
    priority: 1
  },
  {
    id: '2',
    title: "Portfolio Website",
    shortDescription: "My personal website built with React and TypeScript.",
    description: "Lorem ipsum wnirawnriawnr iawnr iawri awir iawrj ajrw.",
    //image: "/assets/portfolio.png",
    //repoLink: "https://github.com/yourusername/portfolio",
    tags: ["Website", "Frontend"],
    codingTags: ["React", "TypeScript"],
    startDate: "2025-01-01",
    featured: true,
    status: "In Progress",
    priority: 2
  }
];
