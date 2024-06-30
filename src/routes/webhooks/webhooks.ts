import { Coolify } from '../..';
import {
  Webhooks_BitbucketEventsManualResponse,
  Webhooks_GiteaEventsManualResponse,
  Webhooks_GithubEventsManualResponse,
  Webhooks_GithubEventsResponse,
  Webhooks_GithubInstallResponse,
  Webhooks_GithubRedirectResponse,
  Webhooks_GitlabEventsManualResponse,
  Webhooks_PaymentsStripeEventsResponse,
  Webhooks_WaitlistCancelResponse,
  Webhooks_WaitlistConfirmResponse,
} from './interfaces';

export class Webhooks {
  constructor(private readonly coolify: Coolify) {}

  async bitbucketEventsManual() {
    return this.coolify.fetchRequest<Webhooks_BitbucketEventsManualResponse>({
      path: `/source/bitbucket/events/manual`,
      method: 'POST',
    });
  }

  async giteaEventsManual() {
    return this.coolify.fetchRequest<Webhooks_GiteaEventsManualResponse>({
      path: `/source/gitea/events/manual`,
      method: 'POST',
    });
  }

  async githubEvents() {
    return this.coolify.fetchRequest<Webhooks_GithubEventsResponse>({
      path: `/source/github/events`,
      method: 'POST',
    });
  }

  async githubEventsManual() {
    return this.coolify.fetchRequest<Webhooks_GithubEventsManualResponse>({
      path: `/source/github/events/manual`,
      method: 'POST',
    });
  }

  async githubInstall() {
    return this.coolify.fetchRequest<Webhooks_GithubInstallResponse>({
      path: `/source/github/install`,
      method: 'GET',
    });
  }

  async githubRedirect() {
    return this.coolify.fetchRequest<Webhooks_GithubRedirectResponse>({
      path: `/source/github/redirect`,
      method: 'GET',
    });
  }

  async gitlabEventsManual() {
    return this.coolify.fetchRequest<Webhooks_GitlabEventsManualResponse>({
      path: `/source/gitlab/events/manual`,
      method: 'POST',
    });
  }

  async paymentsStripeEvents() {
    return this.coolify.fetchRequest<Webhooks_PaymentsStripeEventsResponse>({
      path: `/payments/stripe/events`,
      method: 'POST',
    });
  }

  async waitlistConfirm() {
    return this.coolify.fetchRequest<Webhooks_WaitlistConfirmResponse>({
      path: `/waitlist/confirm`,
      method: 'GET',
    });
  }

  async waitlistCancel() {
    return this.coolify.fetchRequest<Webhooks_WaitlistCancelResponse>({
      path: `/waitlist/cancel`,
      method: 'GET',
    });
  }
}
