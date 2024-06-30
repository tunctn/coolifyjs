export type Waitlist = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  type: string; // varchar(255), not null
  email: string; // varchar(255), not null
  verified: boolean; // bool, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
