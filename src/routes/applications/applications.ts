import { Coolify } from '../..';
import { ApplicationEnvs } from './envs/applications';
import { CreateApplicationPayload, CreateApplicationResponse, DeleteApplicationByUUIDReponse, GetApplicationsResponse } from './interfaces';
import { DeployApplicationResponse } from './interfaces/deploy-application';
import { RestartApplicationResponse } from './interfaces/restart-application';
import { StopApplicationResponse } from './interfaces/stop-application';

export class Applications {
  readonly envs = new ApplicationEnvs(this.coolify);

  constructor(private readonly coolify: Coolify) {}

  async getApplications() {
    return this.coolify.fetchRequest<GetApplicationsResponse>({ path: '/applications', method: 'GET' });
  }

  async createApplication(payload: CreateApplicationPayload) {
    return this.coolify.fetchRequest<CreateApplicationResponse>({ path: '/applications', method: 'POST', body: payload });
  }

  async deleteApplication({ id }: { id: string }) {
    return this.coolify.fetchRequest<DeleteApplicationByUUIDReponse>({ path: `/applications/${id}`, method: 'DELETE' });
  }

  async deployApplication({ id }: { id: string }) {
    return this.coolify.fetchRequest<DeployApplicationResponse>({ path: `/applications/${id}/deploy`, method: 'POST' });
  }

  async restartApplication({ id }: { id: string }) {
    return this.coolify.fetchRequest<RestartApplicationResponse>({ path: `/applications/${id}/restart`, method: 'POST' });
  }

  async stopApplication({ id }: { id: string }) {
    return this.coolify.fetchRequest<StopApplicationResponse>({ path: `/applications/${id}/stop`, method: 'POST' });
  }
}
