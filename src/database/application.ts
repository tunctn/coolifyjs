export type Application = {
  base_directory: string | null; // varchar(255), nullable
  build_command: string | null; // varchar(255), nullable
  build_pack: string | null; // varchar(255), nullable
  config_hash: string | null; // varchar(255), nullable
  created_at: string | null; // timestamp, nullable
  custom_docker_run_options: string | null; // text, nullable
  custom_healthcheck_found: boolean; // bool, not null
  custom_labels: string | null; // text, nullable
  deleted_at: string | null; // timestamp, nullable
  description: string | null; // varchar(255), nullable
  destination_id: number | null; // int8, nullable
  destination_type: string | null; // varchar(255), nullable
  docker_compose: string | null; // text, nullable
  docker_compose_custom_build_command: string | null; // varchar(255), nullable
  docker_compose_custom_start_command: string | null; // varchar(255), nullable
  docker_compose_domains: string | null; // text, nullable
  docker_compose_location: string | null; // varchar(255), nullable
  docker_compose_pr: string | null; // text, nullable
  docker_compose_pr_location: string | null; // varchar(255), nullable
  docker_compose_pr_raw: string | null; // text, nullable
  docker_compose_raw: string | null; // text, nullable
  docker_registry_image_name: string | null; // varchar(255), nullable
  docker_registry_image_tag: string | null; // varchar(255), nullable
  dockerfile: string | null; // text, nullable
  dockerfile_location: string | null; // varchar(255), nullable
  dockerfile_target_build: string | null; // varchar(255), nullable
  environment_id: number; // int8, not null
  fqdn: string | null; // text, nullable
  git_branch: string; // varchar(255), not null
  git_commit_sha: string; // varchar(255), not null
  git_full_url: string | null; // varchar(255), nullable
  git_repository: string; // varchar(255), not null
  health_check_enabled: boolean; // bool, not null
  health_check_host: string | null; // varchar(255), nullable
  health_check_interval: number; // int4, not null
  health_check_method: string | null; // varchar(255), nullable
  health_check_path: string | null; // varchar(255), nullable
  health_check_port: string | null; // varchar(255), nullable
  health_check_response_text: string | null; // varchar(255), nullable
  health_check_retries: number; // int4, not null
  health_check_return_code: number; // int4, not null
  health_check_scheme: string | null; // varchar(255), nullable
  health_check_start_period: number; // int4, not null
  health_check_timeout: number; // int4, not null
  id: number; // bigserial, not null
  install_command: string | null; // varchar(255), nullable
  limits_cpu_shares: number; // int4, not null
  limits_cpus: string; // varchar(255), not null
  limits_cpuset: string | null; // varchar(255), nullable
  limits_memory: string | null; // varchar(255), nullable
  limits_memory_reservation: string | null; // varchar(255), nullable
  limits_memory_swap: string | null; // varchar(255), nullable
  limits_memory_swappiness: number; // int4, not null
  manual_webhook_secret_bitbucket: string | null; // varchar(255), nullable
  manual_webhook_secret_gitea: string | null; // varchar(255), nullable
  manual_webhook_secret_github: string | null; // varchar(255), nullable
  manual_webhook_secret_gitlab: string | null; // varchar(255), nullable
  name: string; // varchar(255), not null
  ports_exposes: string | null; // text, nullable
  ports_mappings: string | null; // text, nullable
  post_deployment_command: string | null; // text, nullable
  post_deployment_command_container: string | null; // text, nullable
  pre_deployment_command: string | null; // text, nullable
  pre_deployment_command_container: string | null; // text, nullable
  preview_url_template: string | null; // varchar(255), nullable
  private_key_id: number | null; // int8, nullable
  publish_directory: string | null; // varchar(255), nullable
  redirect: string; // varchar(255), not null
  repository_project_id: number | null; // int4, nullable
  source_id: number | null; // int8, nullable
  source_type: string | null; // varchar(255), nullable
  start_command: string | null; // varchar(255), nullable
  static_image: string; // varchar(255), not null
  status: string; // varchar(255), not null
  swarm_placement_constraints: string | null; // text, nullable
  swarm_replicas: number; // int4, not null
  updated_at: string | null; // timestamp, nullable
  uuid: string; // varchar(255), not null
  watch_paths: string | null; // text, nullable
};
