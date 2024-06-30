export type WebhookStatus = 'pending' | 'success' | 'failed';
export type Webhook = {
  id: number; // bigserial, not null
  status: WebhookStatus; // varchar(255), not null
  type: string; // varchar(255), not null
  payload: string; // text, not null
  failure_reason: string | null; // text, nullable
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
};
