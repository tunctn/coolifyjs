export type ServerSetting = {
  id: number; // bigserial, not null
  is_swarm_manager: boolean; // bool, not null
  is_jump_server: boolean; // bool, not null
  is_build_server: boolean; // bool, not null
  is_reachable: boolean; // bool, not null
  is_usable: boolean; // bool, not null
  server_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  wildcard_domain: string | null; // varchar(255), nullable
  cleanup_after_percentage: number; // int4, not null
  is_cloudflare_tunnel: boolean; // bool, not null
  is_logdrain_newrelic_enabled: boolean; // bool, not null
  logdrain_newrelic_license_key: string | null; // varchar(255), nullable
  logdrain_newrelic_base_uri: string | null; // varchar(255), nullable
  is_logdrain_highlight_enabled: boolean; // bool, not null
  logdrain_highlight_project_id: string | null; // varchar(255), nullable
  is_logdrain_axiom_enabled: boolean; // bool, not null
  logdrain_axiom_dataset_name: string | null; // varchar(255), nullable
  logdrain_axiom_api_key: string | null; // varchar(255), nullable
  is_swarm_worker: boolean; // bool, not null
  is_logdrain_custom_enabled: boolean; // bool, not null
  logdrain_custom_config: string | null; // text, nullable
  logdrain_custom_config_parser: string | null; // text, nullable
  concurrent_builds: number; // int4, not null
  dynamic_timeout: number; // int4, not null
  force_disabled: boolean; // bool, not null
  is_metrics_enabled: boolean; // bool, not null
  metrics_refresh_rate_seconds: number; // int4, not null
  metrics_history_days: number; // int4, not null
  metrics_token: string; // varchar(255), not null
  is_server_api_enabled: boolean; // bool, not null
};
