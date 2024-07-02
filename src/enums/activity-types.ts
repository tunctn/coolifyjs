export const ACTIVITY_TYPES = ['inline', 'command'] as const;
export type ActivityType = (typeof ACTIVITY_TYPES)[number];
