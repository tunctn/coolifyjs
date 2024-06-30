import { Coolify } from '../..';
import { HealthResponse, VersionResponse } from './interfaces';

export class Utils {
  constructor(private readonly coolify: Coolify) {}

  async health() {
    return this.coolify.fetchRequest<HealthResponse>({ path: '/health', method: 'GET' });
  }

  async version() {
    return this.coolify.fetchRequest<VersionResponse>({ path: '/version', method: 'GET' });
  }
}
