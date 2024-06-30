export type Kubernetes = {
  id: number; // bigserial, not null
  uuid: string; // varchar(255), not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
