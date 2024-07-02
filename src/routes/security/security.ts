import { Coolify } from '../..';
import {
  CreateSecurityKeyPayload,
  CreateSecurityKeyResponse,
  DeleteSecurityKeyResponse,
  GetSecurityKeyResponse,
  GetSecurityKeysResponse,
  UpdateSecurityKeyPayload,
  UpdateSecurityKeyResponse,
} from './interfaces';

export class Security {
  constructor(private readonly coolify: Coolify) {}

  async getSecurityKeys() {
    return this.coolify.fetchRequest<GetSecurityKeysResponse>({ path: '/security/keys', method: 'GET' });
  }

  async createSecurityKey(payload: CreateSecurityKeyPayload) {
    return this.coolify.fetchRequest<CreateSecurityKeyResponse>({ path: '/security/keys', method: 'POST', body: payload });
  }

  async getSecurityKey({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetSecurityKeyResponse>({ path: `/security/keys/${id}`, method: 'GET' });
  }

  async deleteSecurityKey({ id }: { id: string }) {
    return this.coolify.fetchRequest<DeleteSecurityKeyResponse>({ path: `/security/keys/${id}`, method: 'DELETE' });
  }

  async updateSecurityKey({ id }: { id: string }, payload: UpdateSecurityKeyPayload) {
    return this.coolify.fetchRequest<UpdateSecurityKeyResponse>({ path: `/security/keys/${id}`, method: 'PATCH', body: payload });
  }
}
