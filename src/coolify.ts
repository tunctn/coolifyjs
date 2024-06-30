import { Applications } from './routes/applications/applications';
import { Envs } from './routes/envs/envs';
import { Utils } from './routes/utils/utils';

export * from './routes/utils';

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
