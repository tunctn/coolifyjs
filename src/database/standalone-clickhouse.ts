export type StandaloneClickhouse = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  description: string | null; // varchar(255), nullable
  clickhouse_admin_user: string; // varchar(255), not null
  clickhouse_admin_password: string; // text, not null
  is_log_drain_enabled: boolean; // bool, not null
  is_include_timestamps: boolean; // bool, not null
  deleted_at: Date | null; // timestamp, nullable
  status: string; // varchar(255), not null
  image: string; // varchar(255), not null
  is_public: boolean; // bool, not null
  public_port: number | null; // int4, nullable
  ports_mappings: string | null; // text, nullable
  limits_memory: string; // varchar(255), not null
  limits_memory_swap: string; // varchar(255), not null
  limits_memory_swappiness: number; // int4, not null
  limits_memory_reservation: string; // varchar(255), not null
  limits_cpus: string; // varchar(255), not null
  limits_cpuset: string | null; // varchar(255), nullable
  limits_cpu_shares: number; // int4, not null
  started_at: Date | null; // timestamp, nullable
  destination_type: string; // varchar(255), not null
  destination_id: number; // int8, not null
  environment_id: number | null; // int8, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  config_hash: string | null; // varchar(255), nullable
};
