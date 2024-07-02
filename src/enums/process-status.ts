export const PROCESS_STATUS = ['queued', 'in_progress', 'finished', 'error', 'killed', 'cancelled', 'closed'] as const;
export type ProcessStatus = (typeof PROCESS_STATUS)[number];
