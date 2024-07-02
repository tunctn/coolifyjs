export const DATABASE_TYPES = ['postgresql', 'mysql', 'mongodb', 'redis', 'mariadb', 'keydb', 'dragonfly', 'clickhouse'] as const;
export type DatabaseType = (typeof DATABASE_TYPES)[number];
