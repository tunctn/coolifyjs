export type Migration = {
  id: number; // serial4, not null
  migration: string; // varchar(255), not null
  batch: number; // int4, not null
};
