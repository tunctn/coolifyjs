import { DATABASE_TYPES } from './database-types';

export const RESOURCE_TYPES = [
  'public',
  'private-gh-app',
  'private-deploy-key',
  'dockerfile',
  'docker-compose-empty',
  'docker-image',
  'service',
  ...DATABASE_TYPES,
] as const;
export type ResourceType = (typeof RESOURCE_TYPES)[number];
