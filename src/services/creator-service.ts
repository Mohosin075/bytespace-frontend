import { MOCK_CREATOR } from '@/constants/mock-data';
import { Creator } from '@/types';

const CREATORS_LIST: Creator[] = [
  MOCK_CREATOR,
  {
    id: 'alex-devlin',
    name: 'Alex Devlin',
    handle: 'alexdevlin',
    title: 'Senior Cloud & DevOps Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    bio: "Hi! I'm Alex Devlin, a cloud architect with over 10 years of experience.",
    description: 'Through practical, code-first courses, I teach microservices, Kubernetes, and scalable distributed architectures.',
    productsCount: 4,
    followersCount: 340,
    isFollowing: false,
  },
  {
    id: 'sophia-carter',
    name: 'Sophia Carter',
    handle: 'sophiacarter',
    title: 'Digital Art & Brand Strategist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    bio: 'Sophia is an award-winning creative director specializing in digital branding.',
    description: 'Her classes blend psychological research with bold aesthetic choices to help creators build timeless identities.',
    productsCount: 5,
    followersCount: 512,
    isFollowing: true,
  },
];

export const creatorService = {
  getAll: (): Creator[] => {
    return CREATORS_LIST;
  },

  getById: (id: string): Creator | undefined => {
    return CREATORS_LIST.find((cr) => cr.id === id || cr.handle === id);
  },

  search: (query: string, limit = 3): Creator[] => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return CREATORS_LIST.filter(
      (cr) =>
        cr.name.toLowerCase().includes(trimmed) ||
        cr.title.toLowerCase().includes(trimmed)
    ).slice(0, limit);
  },
};
