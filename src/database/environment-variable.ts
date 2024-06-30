export type EnvironmentVariables = {
  id: number; // bigserial, not null
  key: string; // varchar(255), not null
  value: string | null; // text, nullable
  is_build_time: boolean; // bool, not null
  is_preview: boolean; // bool, not null
  application_id: number | null; // int8, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  standalone_postgresql_id: number | null; // int8, nullable
  service_id: number | null; // int8, nullable
  standalone_redis_id: number | null; // int8, nullable
  standalone_mongodb_id: number | null; // int8, nullable
  standalone_mysql_id: number | null; // int8, nullable
  is_shown_once: boolean; // bool, not null
  is_multiline: boolean; // bool, not null
  version: string; // varchar(255), not null
  standalone_keydb_id: number | null; // int8, nullable
  standalone_dragonfly_id: number | null; // int8, nullable
  standalone_clickhouse_id: number | null; // int8, nullable
  is_literal: boolean; // bool, not null
};
