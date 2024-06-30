export type PasswordResetToken = {
  email: string; // varchar(255), not null
  token: string; // varchar(255), not null
  created_at: Date | null; // timestamp, nullable
};
