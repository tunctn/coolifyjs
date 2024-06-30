export type LocalFileVolume = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  fs_path: string; // text, not null
  mount_path: string; // varchar(255), not null
  content: string | null; // text, nullable
  resource_type: string | null; // varchar(255), nullable
  resource_id: number | null; // int8, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  is_directory: boolean; // bool, not null
  chown: string | null; // varchar(255), nullable
  chmod: string | null; // varchar(255), nullable
};
