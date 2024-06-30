export type ApplicationPreview = {
  application_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  docker_compose_domains: string | null; // text, nullable
  fqdn: string | null; // text, nullable
  git_type: string | null; // varchar(255), nullable
  id: number; // bigserial, not null
  pull_request_html_url: string; // varchar(255), not null
  pull_request_id: number; // int4, not null
  pull_request_issue_comment_id: string | null; // varchar(255), nullable
  status: string; // varchar(255), not null
  updated_at: Date | null; // timestamp, nullable
  uuid: string; // varchar(255), not null
};
