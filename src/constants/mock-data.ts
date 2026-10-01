import { Course, Creator, CourseModule, CourseReview, Testimonial } from '@/types';

export const MOCK_CREATOR: Creator = {
  id: 'purepearl-studio',
  name: 'PurePearl Studio',
  handle: 'purepearlstudio',
  title: 'Passionate UI/UX, Web designer',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  bio: 'Welcome to the creative world of [Creator\'s Name]. Here, you\'ll discover the passion, expertise, and inspiration that drive my creative journey. Let\'s explore and learn together!',
  description: 'ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
  productsCount: 3,
  followersCount: 12,
  isFollowing: false,
};

export const MOCK_STUDENT_AVATARS = [
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    slug: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: '/skill/skil1.jpg',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'UI/UX Design',
    featured: true,
  },
  {
    id: 'c2',
    slug: 'build-digital-asset',
    title: 'Build Digital Asset',
    subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'Graphic Design',
    featured: true,
  },
  {
    id: 'c3',
    slug: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'Data Science',
    featured: true,
  },
  {
    id: 'c4',
    slug: 'balancing-productivity-and-life',
    title: 'Balancing Productivity an...',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'Productivity',
    featured: false,
  },
  {
    id: 'c5',
    slug: 'mastering-money-management',
    title: 'Mastering Money Manage...',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'Freelance & Entrepreneurship',
    featured: false,
  },
  {
    id: 'c6',
    slug: 'from-idea-to-startup-success',
    title: 'From Idea to Startup Succ...',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'Marketing',
    featured: false,
  },
  {
    id: 'c7',
    slug: 'full-stack-web-development-mastery',
    title: 'Full-Stack Web Development',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 24,
    duration: '5 hours 30 mins',
    commentsCount: 84,
    rating: 4.8,
    level: 'Intermediate',
    price: 35,
    priceType: 'lifetime',
    category: 'Web Development',
    featured: true,
  },
  {
    id: 'c8',
    slug: 'digital-illustration-for-beginners',
    title: 'Digital Illustration Pro',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 19,
    duration: '3 hours 10 mins',
    commentsCount: 42,
    rating: 4.7,
    level: 'Beginner',
    price: 29,
    priceType: 'lifetime',
    category: 'Digital Illustration',
    featured: true,
  },
  {
    id: 'c9',
    slug: 'cinematic-film-and-video-editing',
    title: 'Cinematic Film & Video',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80',
    lessonsCount: 22,
    duration: '4 hours 15 mins',
    commentsCount: 68,
    rating: 4.9,
    level: 'Advanced',
    price: 39,
    priceType: 'lifetime',
    category: 'Film & Video',
    featured: true,
  },
  {
    id: 'c10',
    slug: 'photography-lighting-and-composition',
    title: 'Photography Masterclass',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 15,
    duration: '2 hours 45 mins',
    commentsCount: 38,
    rating: 4.6,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'Photography',
    featured: false,
  },
  {
    id: 'c11',
    slug: 'social-media-growth-strategies',
    title: 'Social Media Growth 2026',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 18,
    duration: '3 hours 00 mins',
    commentsCount: 77,
    rating: 4.8,
    level: 'Intermediate',
    price: 28,
    priceType: 'lifetime',
    category: 'Social Media',
    featured: true,
  },
  {
    id: 'c12',
    slug: '2d-3d-character-animation',
    title: 'Character Animation Basics',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 20,
    duration: '3 hours 40 mins',
    commentsCount: 51,
    rating: 4.7,
    level: 'Beginner',
    price: 30,
    priceType: 'lifetime',
    category: 'Animation',
    featured: false,
  },
  {
    id: 'c13',
    slug: 'music-production-and-beat-making',
    title: 'Music Production & Beats',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 16,
    duration: '2 hours 50 mins',
    commentsCount: 35,
    rating: 4.6,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    category: 'Music',
    featured: false,
  },
  {
    id: 'c14',
    slug: 'acrylic-drawing-and-painting-guide',
    title: 'Drawing & Acrylic Painting',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 14,
    duration: '2 hours 20 mins',
    commentsCount: 29,
    rating: 4.7,
    level: 'Beginner',
    price: 22,
    priceType: 'lifetime',
    category: 'Drawing & Painting',
    featured: false,
  },
  {
    id: 'c15',
    slug: 'culinary-arts-and-master-cooking',
    title: 'Master Everyday Cooking',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 12,
    duration: '2 hours 05 mins',
    commentsCount: 46,
    rating: 4.9,
    level: 'Beginner',
    price: 20,
    priceType: 'lifetime',
    category: 'Cooking',
    featured: false,
  },
  {
    id: 'c16',
    slug: 'handmade-crafts-and-diy-workshop',
    title: 'Creative Crafts & DIY',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 10,
    duration: '1 hour 45 mins',
    commentsCount: 23,
    rating: 4.5,
    level: 'Beginner',
    price: 18,
    priceType: 'lifetime',
    category: 'Crafts',
    featured: false,
  },
  {
    id: 'c17',
    slug: 'creative-marketing-brand-identity',
    title: 'Creative Brand Marketing',
    creator: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: MOCK_CREATOR.avatar,
    },
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop&q=80',
    lessonsCount: 16,
    duration: '2 hours 40 mins',
    commentsCount: 57,
    rating: 4.8,
    level: 'Intermediate',
    price: 27,
    priceType: 'lifetime',
    category: 'Creative Marketing',
    featured: false,
  },
];

export const MOCK_MODULES: CourseModule[] = [
  {
    id: 'm1',
    moduleNumber: 1,
    title: 'Module 1: Introduction to Digital Assets',
    description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    duration: '12 mins',
  },
  {
    id: 'm2',
    moduleNumber: 2,
    title: 'Module 2: Design Principles for Impact',
    description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    duration: '21 mins',
  },
  {
    id: 'm3',
    moduleNumber: 4,
    title: 'Module 4: User-Centric Design Strategies',
    description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    duration: '16 mins',
  },
  {
    id: 'm4',
    moduleNumber: 5,
    title: 'Module 5: Interactive Media and Engagement',
    description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    duration: '18 mins',
  },
  {
    id: 'm5',
    moduleNumber: 6,
    title: 'Module 6: Project Showcase and Critique',
    description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    duration: '24 mins',
  },
  {
    id: 'm6',
    moduleNumber: 7,
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    duration: '15 mins',
  },
];

export const MOCK_REVIEWS: CourseReview[] = [
  {
    id: 'r1',
    author: 'PurePearl Studio',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'a year ago',
    rating: 5,
    content: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: 'r2',
    author: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'a year ago',
    rating: 5,
    content: 'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
  },
  {
    id: 'r3',
    author: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'a year ago',
    rating: 5,
    content: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    id: 'r4',
    author: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'a year ago',
    rating: 5,
    content: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/testimonials/sarah-m-avatar.svg',
    content: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 't2',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/testimonials/james-l-avatar.svg',
    content: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 't3',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/testimonials/alex-b-avatar.svg',
    content: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const CATEGORIES = [
  'Featured',
  'Design',
  'Development',
  'IT & Software',
  'Business',
  'Marketing',
  'Photography',
  'UI/UX Design',
  'Graphic Design',
  'Web Development',
  'Data Science',
  'Productivity',
  'Freelance & Entrepreneurship',
  'Digital Illustration',
  'Film & Video',
  'Social Media',
  'Music',
  'Drawing & Painting',
  'Animation',
  'Cooking',
  'Crafts',
  '+ More',
];

export function matchCourseCategory(
  courseCategory: string,
  courseTitle: string,
  selectedCategory: string
): boolean {
  if (!selectedCategory || selectedCategory === 'Featured') return true;

  const sel = selectedCategory.toLowerCase().trim();
  const cat = (courseCategory || '').toLowerCase().trim();
  const title = (courseTitle || '').toLowerCase().trim();

  // Direct match or inclusion
  if (cat === sel || cat.includes(sel) || sel.includes(cat)) return true;

  // Broad category alias mapping
  if (sel === 'design') {
    return (
      cat.includes('design') ||
      cat.includes('illustration') ||
      cat.includes('drawing') ||
      cat.includes('animation') ||
      title.includes('design') ||
      title.includes('figma')
    );
  }
  if (sel === 'development' || sel === 'web development' || sel === 'web dev') {
    return (
      cat.includes('development') ||
      cat.includes('dev') ||
      cat.includes('web') ||
      title.includes('react') ||
      title.includes('next.js') ||
      title.includes('web') ||
      title.includes('code')
    );
  }
  if (sel === 'it & software' || sel === 'it' || sel === 'software' || sel === 'it & tech') {
    return (
      cat.includes('data') ||
      cat.includes('development') ||
      cat.includes('software') ||
      cat.includes('it') ||
      title.includes('data') ||
      title.includes('ai') ||
      title.includes('tech')
    );
  }
  if (sel === 'business' || sel === 'entrepreneurship') {
    return (
      cat.includes('freelance') ||
      cat.includes('entrepreneurship') ||
      cat.includes('productivity') ||
      cat.includes('business') ||
      title.includes('money') ||
      title.includes('startup') ||
      title.includes('productivity')
    );
  }
  if (sel === 'marketing') {
    return (
      cat.includes('marketing') ||
      cat.includes('social media') ||
      title.includes('marketing') ||
      title.includes('growth') ||
      title.includes('brand')
    );
  }
  if (sel === 'photography' || sel === 'photo') {
    return (
      cat.includes('photography') ||
      cat.includes('film') ||
      cat.includes('video') ||
      title.includes('photo') ||
      title.includes('film') ||
      title.includes('video')
    );
  }

  // Fallback: search title or category string
  return title.includes(sel) || cat.includes(sel);
}

export const PATHS_CATEGORIES = [
  {
    id: 'p1',
    name: 'Design',
    icon: 'wrench',
  },
  {
    id: 'p2',
    name: 'Development',
    icon: 'code',
  },
  {
    id: 'p3',
    name: 'IT & Software',
    icon: 'laptop',
  },
  {
    id: 'p4',
    name: 'Business',
    icon: 'building',
  },
  {
    id: 'p5',
    name: 'Marketing',
    icon: 'megapone',
  },
  {
    id: 'p6',
    name: 'Photography',
    icon: 'camera',
  },
];

