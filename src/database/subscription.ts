export type Subscriptions = {
  id: number; // bigserial, not null
  lemon_subscription_id: string | null; // varchar(255), nullable
  lemon_order_id: string | null; // varchar(255), nullable
  lemon_product_id: string | null; // varchar(255), nullable
  lemon_variant_id: string | null; // varchar(255), nullable
  lemon_variant_name: string | null; // varchar(255), nullable
  lemon_customer_id: string | null; // varchar(255), nullable
  lemon_status: string | null; // varchar(255), nullable
  lemon_trial_ends_at: string | null; // varchar(255), nullable
  lemon_renews_at: string | null; // varchar(255), nullable
  lemon_ends_at: string | null; // varchar(255), nullable
  lemon_update_payment_method_url: string | null; // varchar(255), nullable
  team_id: number; // int8, not null
  created_at: Date | null; // timestamp, nullable
  updated_at: Date | null; // timestamp, nullable
  stripe_invoice_paid: boolean; // bool, not null
  stripe_subscription_id: string | null; // varchar(255), nullable
  stripe_customer_id: string | null; // varchar(255), nullable
  stripe_cancel_at_period_end: boolean; // bool, not null
  stripe_plan_id: string | null; // varchar(255), nullable
  stripe_feedback: string | null; // varchar(255), nullable
  stripe_comment: string | null; // text, nullable
  stripe_trial_already_ended: boolean; // bool, not null
};
