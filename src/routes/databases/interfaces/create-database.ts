import { DatabaseType } from '../../../types';

export interface CreateDatabasePayload {
  type: DatabaseType;
  name: string;
  description?: string | null;
  image?: string;
  project_uuid: string;
  environment_name: string;
  server_uuid: string;
  destination_uuid?: string;
  instant_deploy?: boolean;
  postgres_user?: string;
  postgres_password?: string;
  postgres_db?: string;
  limits_memory?: string;
  limits_memory_swap?: string;
  limits_memory_swappiness?: number;
  limits_memory_reservation?: string;
  limits_cpus?: string;
  limits_cpuset?: string | null;
  limits_cpu_shares?: number;
}

export interface CreateDatabaseResponse {}
