export type AdditionalDestination = {
  application_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  id: number; // bigserial, not null
  server_id: number; // int8, not null
  standalone_docker_id: number; // int8, not null
  status: string; // varchar(255), not null
  updated_at: Date | null; // timestamp, nullable
};
