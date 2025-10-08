export type ProjectStatus = "Completed" | "In Progress" | "Planned" | "On Hold";

export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image?: string;
    repoLink?: string;
    tags?: string[];
    technologies?: string[];
    startDate?: Date;
    endDate?: Date;
    featured?: boolean;
    client?: string;
    status?: ProjectStatus;
    priority?: number;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'tower-defense-game',
        title: "Tower Defense Game",
        shortDescription: "A JavaFX tower defense game built with a teammate.",
        description: "Implemented enemy AI, pathfinding, and wave mechanics...",
        tags: ["Game", "Team Project"],
        technologies: ["Java", "JavaFX"],
        startDate: new Date("2023-08-01"),
        endDate: new Date("2023-10-01"),
        featured: true,
        client: "University Project",
        status: "Completed",
        priority: 1
    },
    {
        id: '2',
        slug: 'portfolio-website',
        title: "Portfolio Website",
        shortDescription: "My personal website built with React and TypeScript.",
        description: "Work in progress portfolio site with custom design...",
        technologies: ["React", "TypeScript"],
        startDate: new Date("2025-01-01"),
        featured: true,
        status: "In Progress",
        priority: 2
    }
];
