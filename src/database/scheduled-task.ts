export type ScheduledTask = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  enabled: boolean; // bool, not null
  name: string; // varchar(255), not null
  command: string; // varchar(255), not null
  frequency: string; // varchar(255), not null
  container: string | null; // varchar(255), nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  application_id: number | null; // int8, nullable
  service_id: number | null; // int8, nullable
  team_id: number; // int8, not null
};
