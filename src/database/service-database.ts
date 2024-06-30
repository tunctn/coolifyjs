export type ServiceDatabase = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  human_name: string | null; // varchar(255), nullable
  description: string | null; // text, nullable
  ports: string | null; // text, nullable
  exposes: string | null; // text, nullable
  status: string; // varchar(255), not null
  service_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  exclude_from_status: boolean; // bool, not null
  image: string | null; // varchar(255), nullable
  public_port: number | null; // int4, nullable
  is_public: boolean; // bool, not null
  is_log_drain_enabled: boolean; // bool, not null
  is_include_timestamps: boolean; // bool, not null
  deleted_at: Date | null; // timestamp, nullable
  is_gzip_enabled: boolean; // bool, not null
  is_stripprefix_enabled: boolean; // bool, not null
};
