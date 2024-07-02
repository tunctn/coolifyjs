export const APPLICATION_DEPLOYMENT_STATUS = ['queued', 'in_progress', 'finished', 'failed', 'cancelled-by-user'] as const;
export type ApplicationDeploymentStatus = (typeof APPLICATION_DEPLOYMENT_STATUS)[number];
