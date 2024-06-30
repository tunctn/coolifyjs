export type Environment = {
  id: number; // bigserial, not null
  name: string; // varchar(255), not null
  project_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  description: string | null; // varchar(255), nullable
};
