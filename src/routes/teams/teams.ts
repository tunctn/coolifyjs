import { Coolify } from '../..';
import {
  GetCurrentTeamMembersResponse,
  GetCurrentTeamResponse,
  GetTeamMembersResponse,
  GetTeamResponse,
  GetTeamsResponse,
} from './interfaces';

export class Teams {
  constructor(private readonly coolify: Coolify) {}

  async getTeams() {
    return this.coolify.fetchRequest<GetTeamsResponse>({ path: '/teams', method: 'GET' });
  }

  async getCurrentTeam() {
    return this.coolify.fetchRequest<GetCurrentTeamResponse>({ path: '/teams/current', method: 'GET' });
  }

  async getCurrentTeamMembers() {
    return this.coolify.fetchRequest<GetCurrentTeamMembersResponse>({ path: '/teams/current/members', method: 'GET' });
  }

  async getTeam({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetTeamResponse>({ path: `/teams/${id}`, method: 'GET' });
  }

  async getTeamMembers({ id }: { id: string }) {
    return this.coolify.fetchRequest<GetTeamMembersResponse>({ path: `/teams/${id}/members`, method: 'GET' });
  }
}
