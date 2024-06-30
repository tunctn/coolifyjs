export type Service = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  environment_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  server_id: number | null; // int8, nullable
  description: string | null; // text, nullable
  docker_compose_raw: string; // text, not null
  docker_compose: string | null; // text, nullable
  destination_type: string | null; // varchar(255), nullable
  destination_id: number | null; // int8, nullable
  deleted_at: Date | null; // timestamp, nullable
  connect_to_docker_network: boolean; // bool, not null
  config_hash: string | null; // varchar(255), nullable
  service_type: string | null; // varchar(255), nullable
  is_container_label_escape_enabled: boolean; // bool, not null
};
