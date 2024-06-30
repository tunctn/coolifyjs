export type ApplicationSettings = {
  application_id: number; // int8, not null
  connect_to_docker_network: boolean; // bool, not null
  created_at: Date | null; // timestamp, nullable
  custom_internal_name: string | null; // varchar(255), nullable
  gpu_count: string | null; // varchar(255), nullable
  gpu_device_ids: string | null; // varchar(255), nullable
  gpu_driver: string; // varchar(255), not null
  gpu_options: string | null; // text, nullable
  id: number; // bigserial, not null
  is_auto_deploy_enabled: boolean; // bool, not null
  is_build_server_enabled: boolean; // bool, not null
  is_consistent_container_name_enabled: boolean; // bool, not null
  is_container_label_escape_enabled: boolean; // bool, not null
  is_debug_enabled: boolean; // bool, not null
  is_env_sorting_enabled: boolean; // bool, not null
  is_force_https_enabled: boolean; // bool, not null
  is_git_lfs_enabled: boolean; // bool, not null
  is_git_submodules_enabled: boolean; // bool, not null
  is_gpu_enabled: boolean; // bool, not null
  is_gzip_enabled: boolean; // bool, not null
  is_include_timestamps: boolean; // bool, not null
  is_log_drain_enabled: boolean; // bool, not null
  is_preview_deployments_enabled: boolean; // bool, not null
  is_raw_compose_deployment_enabled: boolean; // bool, not null
  is_static: boolean; // bool, not null
  is_stripprefix_enabled: boolean; // bool, not null
  is_swarm_only_worker_nodes: boolean; // bool, not null
  updated_at: Date | null; // timestamp, nullable
};
