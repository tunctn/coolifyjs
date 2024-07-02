export const BUILD_PACK_TYPES = ['nixpacks', 'static', 'dockerfile', 'docker-compose'] as const;
export type BuildPackType = (typeof BUILD_PACK_TYPES)[number];
