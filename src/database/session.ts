export type Session = {
  id: string; // varchar(255), not null
  user_id: number | null; // int8, nullable
  ip_address: string | null; // varchar(45), nullable
  user_agent: string | null; // text, nullable
  payload: string; // text, not null
  last_activity: number; // int4, not null
};
