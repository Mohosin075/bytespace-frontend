import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines whether a course belongs to the given category filter.
 * Supports broad category aliases (e.g. 'Design' matches 'UI/UX Design').
 */
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

