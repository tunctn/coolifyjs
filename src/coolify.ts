import { Applications } from './routes/applications/applications';
import { Envs } from './routes/envs/envs';
import { Projects } from './routes/projects/projects';
import { Resources } from './routes/resources/resources';
import { Servers } from './routes/servers/servers';
import { Teams } from './routes/teams/teams';
import { Utils } from './routes/utils/utils';
import { Webhooks } from './routes/webhooks/webhooks';

export * from './routes/applications';
export * from './routes/envs';
export * from './routes/projects';
export * from './routes/resources';
export * from './routes/servers';
export * from './routes/teams';
export * from './routes/utils';
export * from './routes/webhooks';

export interface CoolifyInstance {
  url: string;
  version: 'v1';
  apiToken: string;
}

interface FetchParams {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
  requestOptions?: Omit<RequestInit, 'body'>;
}

export type CoolifyFetch = <T>(params: FetchParams) => Promise<T>;

export class Coolify {
  private _instance: CoolifyInstance;

  readonly applications = new Applications(this);
  readonly utils = new Utils(this);
  readonly envs = new Envs(this);
  readonly teams = new Teams(this);
  readonly projects = new Projects(this);
  readonly servers = new Servers(this);
  readonly resources = new Resources(this);
  readonly webhooks = new Webhooks(this);

  constructor(instance: CoolifyInstance) {
    this._instance = instance;
    if (!this._instance.apiToken) {
      throw new Error('Missing API key. Pass it to the constructor `new Coolify({apiToken:"..."})`');
    }
    if (!this._instance.url) {
      throw new Error('Missing URL. Pass it to the constructor `new Coolify({url:"..."})`');
    }
    if (!this._instance.version) {
      throw new Error('Missing version. Pass it to the constructor `new Coolify({version:"..."})`');
    }
  }
  get instance() {
    return this._instance;
  }
  public fetchRequest = async <T>({ path, method, body, requestOptions = {} }: FetchParams): Promise<T> => {
    const { headers, ...rest } = requestOptions;
    requestOptions = {
      ...rest,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.instance.apiToken}`,
        ...headers,
      },
    };
    try {
      const response = await fetch(`${this.instance.url}/${this._instance.version}${path}`, {
        method,
        ...requestOptions,
        body: JSON.stringify(body),
      });
      return response.json() as T;
    } catch (err) {
      throw err;
    }
  };
}

const coolify = new Coolify({
  url: 'https://api.coolify.io',
  version: 'v1',
  apiToken: 'test',
});
