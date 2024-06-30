import { Coolify } from '../..';
import { GetServerDomainsResponse, GetServerResponse, GetServersResponse } from './interfaces';

export class Servers {
  constructor(private readonly coolify: Coolify) {}

  async getServers() {
    return this.coolify.fetchRequest<GetServersResponse>({ path: '/servers', method: 'GET' });
  }

  async getServer({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetServerResponse>({ path: `/servers/${id}`, method: 'GET' });
  }

  async getServerDomains({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetServerDomainsResponse>({ path: `/servers/${id}/domains`, method: 'GET' });
  }
}
