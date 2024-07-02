import { Coolify } from '../..';
import { DisableApiResponse, EnableApiResponse } from './interfaces';

export class Api {
  constructor(private readonly coolify: Coolify) {}

  async enableApi(): Promise<EnableApiResponse> {
    return await this.coolify
      .fetchRequest<EnableApiResponse>({ path: '/enable', method: 'POST' })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message,
        };
      });
  }

  async disableApi(): Promise<DisableApiResponse> {
    return await this.coolify
      .fetchRequest<DisableApiResponse>({ path: '/disable', method: 'POST' })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message,
        };
      });
  }
}
