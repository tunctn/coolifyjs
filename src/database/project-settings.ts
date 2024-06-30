export type ProjectSettings = {
  id: number; // bigserial, not null
  project_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
