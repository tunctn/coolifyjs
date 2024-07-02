export const REDIRECT_TYPES = ['both', 'www', 'non-www'] as const;
export type RedirectType = (typeof REDIRECT_TYPES)[number];
