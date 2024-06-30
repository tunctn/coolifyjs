export type Team = {
  id: number; // bigserial, not null
  name: string; // varchar(255), not null
  description: string | null; // varchar(255), nullable
  personal_team: boolean; // bool, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  smtp_enabled: boolean; // bool, not null
  smtp_from_address: string | null; // varchar(255), nullable
  smtp_from_name: string | null; // varchar(255), nullable
  smtp_recipients: string | null; // varchar(255), nullable
  smtp_host: string | null; // varchar(255), nullable
  smtp_port: number | null; // int4, nullable
  smtp_encryption: string | null; // varchar(255), nullable
  smtp_username: string | null; // text, nullable
  smtp_password: string | null; // text, nullable
  smtp_timeout: number | null; // int4, nullable
  smtp_notifications_test: boolean; // bool, not null
  smtp_notifications_deployments: boolean; // bool, not null
  smtp_notifications_status_changes: boolean; // bool, not null
  discord_enabled: boolean; // bool, not null
  discord_webhook_url: string | null; // varchar(255), nullable
  discord_notifications_test: boolean; // bool, not null
  discord_notifications_deployments: boolean; // bool, not null
  discord_notifications_status_changes: boolean; // bool, not null
  smtp_notifications_database_backups: boolean; // bool, not null
  discord_notifications_database_backups: boolean; // bool, not null
  show_boarding: boolean; // bool, not null
  resend_enabled: boolean; // bool, not null
  resend_api_key: string | null; // text, nullable
  use_instance_email_settings: boolean; // bool, not null
  telegram_enabled: boolean; // bool, not null
  telegram_token: string | null; // text, nullable
  telegram_chat_id: string | null; // text, nullable
  telegram_notifications_test: boolean; // bool, not null
  telegram_notifications_deployments: boolean; // bool, not null
  telegram_notifications_status_changes: boolean; // bool, not null
  telegram_notifications_database_backups: boolean; // bool, not null
  telegram_notifications_test_message_thread_id: string | null; // text, nullable
  telegram_notifications_deployments_message_thread_id: string | null; // text, nullable
  telegram_notifications_status_changes_message_thread_id: string | null; // text, nullable
  telegram_notifications_database_backups_message_thread_id: string | null; // text, nullable
  custom_server_limit: number | null; // int4, nullable
  telegram_notifications_scheduled_tasks: boolean; // bool, not null
  smtp_notifications_scheduled_tasks: boolean; // bool, not null
  discord_notifications_scheduled_tasks: boolean; // bool, not null
  telegram_notifications_scheduled_tasks_thread_id: string | null; // text, nullable
};
