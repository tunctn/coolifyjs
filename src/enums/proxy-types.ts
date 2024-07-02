export const PROXY_TYPES = ['NONE', 'TRAEFIK_V2', 'NGINX', 'CADDY'] as const;
export type ProxyType = (typeof PROXY_TYPES)[number];

export const PROXY_STATUS = ['exited', 'running'] as const;
export type ProxyStatus = (typeof PROXY_STATUS)[number];
