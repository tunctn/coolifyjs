import { Coolify } from '../..';
import { SendFeedbackResponse } from './interfaces/send-feedback';

export class Feedback {
  constructor(private readonly coolify: Coolify) {}

  async sendFeedback() {
    return this.coolify.fetchRequest<SendFeedbackResponse>({ path: '/feedback', method: 'POST' });
  }
}
