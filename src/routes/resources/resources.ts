import { Coolify } from '../..';
import { GetResourcesResponse } from './interfaces/get-resources';

export class Resources {
  constructor(private readonly coolify: Coolify) {}

  async getResources() {
    return this.coolify.fetchRequest<GetResourcesResponse>({ path: '/resources', method: 'GET' });
  }
}
