const rawValue = (import.meta.env.VITE_SITE_UNDER_CONSTRUCTION ?? 'false')
  .toString()
  .trim()
  .toLowerCase();

export const SITE_UNDER_CONSTRUCTION = rawValue === 'true' || rawValue === '1';


