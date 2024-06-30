export type ScheduledTaskExecutionStatus = 'success' | 'failed' | 'running';

export type ScheduledTaskExecution = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  status: ScheduledTaskExecutionStatus; // varchar(255), not null
  message: string | null; // text, nullable
  scheduled_task_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
