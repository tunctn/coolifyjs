export type StandaloneDocker = {
  id: number; // bigserial, not null
  name: string; // varchar(255), not null
  uuid: string; // varchar(255), not null
  network: string; // varchar(255), not null
  server_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
