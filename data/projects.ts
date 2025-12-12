export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    techStack: string[];
    demoUrl?: string;
    repoUrl?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with cart, checkout, and payment integration. Built with modern web technologies.",
        tags: ["fullstack", "web"],
        techStack: ["Next.js", "TypeScript", "Prisma", "Stripe"],
        demoUrl: "https://demo.example.com",
        repoUrl: "https://github.com/username/ecommerce",
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates, drag-and-drop, and team features.",
        tags: ["frontend", "web"],
        techStack: ["React", "Redux", "Socket.io", "Node.js"],
        demoUrl: "https://tasks.example.com",
        repoUrl: "https://github.com/username/taskapp",
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Beautiful weather app with 7-day forecasts, location search, and animated weather icons.",
        tags: ["frontend", "api"],
        techStack: ["Vue.js", "Tailwind", "OpenWeather API"],
        demoUrl: "https://weather.example.com",
        repoUrl: "https://github.com/username/weather",
    },
    {
        id: "4",
        title: "Portfolio Generator",
        description: "CLI tool to generate beautiful portfolio websites from a simple config file.",
        tags: ["cli", "tool"],
        techStack: ["Node.js", "Commander", "Handlebars"],
        repoUrl: "https://github.com/username/portfolio-gen",
    },
    {
        id: "5",
        title: "Chat Application",
        description: "Real-time chat with rooms, direct messages, file sharing, and emoji reactions.",
        tags: ["fullstack", "realtime"],
        techStack: ["Next.js", "Supabase", "WebSocket"],
        demoUrl: "https://chat.example.com",
        repoUrl: "https://github.com/username/chatapp",
    },
    {
        id: "6",
        title: "Budget Tracker",
        description: "Personal finance app with expense tracking, budgets, and visual analytics.",
        tags: ["frontend", "web"],
        techStack: ["React", "Chart.js", "Firebase"],
        demoUrl: "https://budget.example.com",
        repoUrl: "https://github.com/username/budget",
    },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
