export type InstanceSetting = {
  id: number; // bigserial, not null
  public_ipv4: string | null; // varchar(255), nullable
  public_ipv6: string | null; // varchar(255), nullable
  fqdn: string | null; // varchar(255), nullable
  public_port_min: number; // int4, not null
  public_port_max: number; // int4, not null
  do_not_track: boolean; // bool, not null
  is_auto_update_enabled: boolean; // bool, not null
  is_registration_enabled: boolean; // bool, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  next_channel: boolean; // bool, not null
  is_resale_license_active: boolean; // bool, not null
  resale_license: string | null; // text, nullable
  smtp_enabled: boolean; // bool, not null
  smtp_from_address: string | null; // varchar(255), nullable
  smtp_from_name: string | null; // varchar(255), nullable
  smtp_recipients: string | null; // text, nullable
  smtp_host: string | null; // varchar(255), nullable
  smtp_port: number | null; // int4, nullable
  smtp_encryption: string | null; // varchar(255), nullable
  smtp_username: string | null; // text, nullable
  smtp_password: string | null; // text, nullable
  smtp_timeout: number | null; // int4, nullable
  resend_enabled: boolean; // bool, not null
  resend_api_key: string | null; // text, nullable
  is_dns_validation_enabled: boolean; // bool, not null
  custom_dns_servers: string | null; // varchar(255), nullable
  instance_name: string | null; // varchar(255), nullable
};
