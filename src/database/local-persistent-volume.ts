export type LocalPersistentVolume = {
  id: number; // bigserial, not null
  name: string; // varchar(255), not null
  mount_path: string; // varchar(255), not null
  host_path: string | null; // varchar(255), nullable
  container_id: string | null; // varchar(255), nullable
  resource_type: string | null; // varchar(255), nullable
  resource_id: number | null; // int8, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  is_readonly: boolean; // bool, not null
};
