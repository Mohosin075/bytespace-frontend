import { Course, coursesData } from "./course";

export interface CategoryInfo {
    slug: string;
    name: string;
    description: string;
    icon: string;
    tags: string[];
}

export const categoriesData: CategoryInfo[] = [
    {
        slug: "development",
        name: "Development",
        description: "Learn full-stack web development, modern frontend frameworks, cloud infrastructure, and software engineering.",
        icon: "Code",
        tags: ["Web Development", "Development", "Data Science", "Software"],
    },
    {
        slug: "design",
        name: "UI/UX & Design",
        description: "Master digital product design, Figma workflows, design systems, visual hierarchy, and mobile interfaces.",
        icon: "Palette",
        tags: ["UI/UX Design", "Graphic Design", "Digital Illustration", "Design"],
    },
    {
        slug: "marketing",
        name: "Marketing & Growth",
        description: "Discover modern growth marketing, content creation, social media algorithms, and brand storytelling.",
        icon: "TrendingUp",
        tags: ["Marketing", "Creative Marketing", "Social Media"],
    },
    {
        slug: "it",
        name: "IT & Data Science",
        description: "Dive into data analytics, machine learning fundamentals, backend engineering, and cloud management.",
        icon: "Server",
        tags: ["Data Science", "Web Development", "IT"],
    },
    {
        slug: "business",
        name: "Business & Freelancing",
        description: "Build profitable digital agencies, master freelance client acquisition, pricing, and project negotiation.",
        icon: "Briefcase",
        tags: ["Creative Marketing", "Marketing", "Business"],
    },
    {
        slug: "photography",
        name: "Photography & Film",
        description: "Capture stunning photography, master Lightroom and Photoshop color grading, and cinematic video editing.",
        icon: "Camera",
        tags: ["Photography", "Film & Video"],
    },
    {
        slug: "animation",
        name: "3D & Animation",
        description: "Bring characters and graphics to life with modern 2D and 3D motion graphics and animation techniques.",
        icon: "PlaySquare",
        tags: ["Animation", "Digital Illustration"],
    },
    {
        slug: "music",
        name: "Music Production",
        description: "Produce, mix, and master audio tracks from home studios using industry-standard digital audio workstations.",
        icon: "Music",
        tags: ["Music"],
    },
    {
        slug: "finance",
        name: "Finance & Investing",
        description: "Understand personal budgeting, freelance taxes, digital asset accounting, and financial planning.",
        icon: "DollarSign",
        tags: ["Business", "Creative Marketing"],
    },
    {
        slug: "cooking",
        name: "Culinary & Cooking",
        description: "Discover kitchen essentials, pastry arts, artisanal bread baking, and global cuisine masterclasses.",
        icon: "Utensils",
        tags: ["Cooking"],
    },
    {
        slug: "sport",
        name: "Sport & Fitness",
        description: "Stay energized with guided workout routines, mobility training, nutrition guides, and athletic wellness.",
        icon: "Activity",
        tags: ["Sport", "Health"],
    },
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
    const normalized = slug.toLowerCase().trim();
    return categoriesData.find((cat) => cat.slug.toLowerCase() === normalized);
}

export function getCoursesByCategory(categorySlug: string): Course[] {
    const cat = getCategoryBySlug(categorySlug);
    const targetSlug = categorySlug.toLowerCase().trim();

    const matches = coursesData.filter((course) => {
        const courseCat = course.category?.toLowerCase() || "";
        const courseTitle = course.title?.toLowerCase() || "";

        if (cat) {
            const hasTag = cat.tags.some((tag) => courseCat.includes(tag.toLowerCase()));
            if (hasTag) return true;
        }

        return courseCat.includes(targetSlug) || targetSlug.includes(courseCat) || courseTitle.includes(targetSlug);
    });

    if (matches.length > 0) {
        return matches;
    }

    // Fallback to top featured courses if exact category has few items
    return coursesData.slice(0, 6);
}
