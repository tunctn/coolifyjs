export type Server = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  name: string; // varchar(255), not null
  description: string | null; // varchar(255), nullable
  ip: string; // varchar(255), not null
  port: number; // int4, not null
  user: string; // varchar(255), not null
  team_id: number; // int8, not null
  private_key_id: number; // int8, not null
  proxy: any | null; // json, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  unreachable_notification_sent: boolean; // bool, not null
  unreachable_count: number; // int4, not null
  high_disk_usage_notification_sent: boolean; // bool, not null
  log_drain_notification_sent: boolean; // bool, not null
  swarm_cluster: number | null; // int4, nullable
};
