import { Coolify } from '../..';
import { GetDeploymentResponse, GetDeploymentsResponse } from './interfaces';

export class Deployments {
  constructor(private readonly coolify: Coolify) {}

  async getDeployments() {
    return this.coolify.fetchRequest<GetDeploymentsResponse>({ path: '/deployments', method: 'GET' });
  }

  async getDeployment({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetDeploymentResponse>({ path: `/deployments/${id}`, method: 'GET' });
  }
}
