export type FailedJob = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  connection: string; // text, not null
  queue: string; // text, not null
  payload: string; // text, not null
  exception: string; // text, not null
  failed_at: Date; // timestamp, not null
};
