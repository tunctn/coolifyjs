import { Coolify } from '../..';
import { GetProjectByEnvNameResponse, GetProjectResponse, GetProjectsResponse } from './interfaces';

export class Projects {
  constructor(private readonly coolify: Coolify) {}

  async getProjects() {
    return this.coolify.fetchRequest<GetProjectsResponse>({ path: '/projects', method: 'GET' });
  }

  async getProject({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetProjectResponse>({ path: `/projects/${id}`, method: 'GET' });
  }

  async getProjectByEnvName({ id, envName }: { id: string; envName: string }) {
    return this.coolify.fetchRequest<GetProjectByEnvNameResponse>({ path: `/projects/${id}/${envName}`, method: 'GET' });
  }
}
