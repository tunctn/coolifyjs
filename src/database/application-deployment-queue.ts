export type ApplicationDeploymentQueue = {
  application_id: string; // varchar(255), not null
  application_name: string | null; // varchar(255), nullable
  commit: string; // varchar(255), not null
  commit_message: string | null; // varchar(50), nullable
  created_at: Date | null; // timestamp, nullable
  current_process_id: string | null; // varchar(255), nullable
  deployment_url: string | null; // varchar(255), nullable
  deployment_uuid: string; // varchar(255), not null
  destination_id: string; // varchar(255), not null
  force_rebuild: boolean; // bool, not null
  git_type: string | null; // varchar(255), nullable
  id: number; // bigserial, not null
  is_api: boolean; // bool, not null
  is_webhook: boolean; // bool, not null
  logs: string | null; // text, nullable
  only_this_server: boolean; // bool, not null
  pull_request_id: number; // int4, not null
  restart_only: boolean; // bool, not null
  rollback: boolean; // bool, not null
  server_id: number | null; // int4, nullable
  server_name: string | null; // varchar(255), nullable
  status: string | null; // varchar(255), nullable
  updated_at: Date | null; // timestamp, nullable
};
