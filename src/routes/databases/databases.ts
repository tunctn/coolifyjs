import { Coolify } from '../..';
import {
  CreateDatabaseResponse,
  DeleteDatabaseResponse,
  GetDatabaseResponse,
  GetDatabasesResponse,
  UpdateDatabaseResponse,
} from './interfaces';

export class Databases {
  constructor(private readonly coolify: Coolify) {}

  async getDatabases() {
    return this.coolify.fetchRequest<GetDatabasesResponse>({ path: '/databases', method: 'GET' });
  }

  async createDatabase() {
    return this.coolify.fetchRequest<CreateDatabaseResponse>({ path: '/databases', method: 'POST' });
  }

  async getDatabase({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetDatabaseResponse>({ path: `/databases/${id}`, method: 'GET' });
  }

  async updateDatabase({ id }: { id: string }) {
    return this.coolify.fetchRequest<UpdateDatabaseResponse>({ path: `/databases/${id}`, method: 'PATCH' });
  }

  async deleteDatabase({ id }: { id: string }) {
    return this.coolify.fetchRequest<DeleteDatabaseResponse>({ path: `/databases/${id}`, method: 'DELETE' });
  }
}
