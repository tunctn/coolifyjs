import { Coolify } from '../..';
import { DeleteEnvByUUIDReponse } from './interfaces/delete-env-by-uuid';

export class Envs {
  constructor(private readonly coolify: Coolify) {}

  async deleteEnv({ id }: { id: string }) {
    return this.coolify.fetchRequest<DeleteEnvByUUIDReponse>({ path: `/envs/${id}`, method: 'DELETE' });
  }
}
