export type ActivityLog = {
  batch_uuid: string | null; // uuid, nullable
  causer_id: number | null; // int8, nullable
  causer_type: string | null; // varchar(255), nullable
  created_at: Date | null; // timestamp, nullable
  description: string; // text, not null
  event: string | null; // varchar(255), nullable
  id: number; // bigserial, not null
  log_name: string | null; // varchar(255), nullable
  properties: any | null; // json, nullable
  subject_id: number | null; // int8, nullable
  subject_type: string | null; // varchar(255), nullable
  updated_at: Date | null; // timestamp, nullable
};
