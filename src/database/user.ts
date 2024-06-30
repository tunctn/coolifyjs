export type User = {
  id: number; // bigserial, not null
  name: string; // varchar(255), not null
  email: string; // varchar(255), not null
  email_verified_at: Date | null; // timestamp, nullable
  password: string | null; // varchar(255), nullable
  remember_token: string | null; // varchar(100), nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  two_factor_secret: string | null; // text, nullable
  two_factor_recovery_codes: string | null; // text, nullable
  two_factor_confirmed_at: Date | null; // timestamp, nullable
  force_password_reset: boolean; // bool, not null
  marketing_emails: boolean; // bool, not null
};
