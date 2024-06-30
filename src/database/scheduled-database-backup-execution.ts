export type ScheduledDatabaseBackupExecution = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  status: 'success' | 'failed' | 'running'; // varchar(255), not null
  message: string | null; // text, nullable
  size: string | null; // text, nullable
  filename: string | null; // text, nullable
  scheduled_database_backup_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  database_name: string | null; // varchar(255), nullable
};
