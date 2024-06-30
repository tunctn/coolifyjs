"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhooks = void 0;
class Webhooks {
    constructor(coolify) {
        this.coolify = coolify;
    }
    bitbucketEventsManual() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/source/bitbucket/events/manual`,
                method: 'POST',
            });
        });
    }
    giteaEventsManual() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/source/gitea/events/manual`,
                method: 'POST',
            });
        });
    }
    githubEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/source/github/events`,
                method: 'POST',
            });
        });
    }
    githubEventsManual() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/source/github/events/manual`,
                method: 'POST',
            });
        });
    }
    githubInstall() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/source/github/install`,
                method: 'GET',
            });
        });
    }
    githubRedirect() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/source/github/redirect`,
                method: 'GET',
            });
        });
    }
    gitlabEventsManual() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/source/gitlab/events/manual`,
                method: 'POST',
            });
        });
    }
    paymentsStripeEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/payments/stripe/events`,
                method: 'POST',
            });
        });
    }
    waitlistConfirm() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/waitlist/confirm`,
                method: 'GET',
            });
        });
    }
    waitlistCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({
                path: `/waitlist/cancel`,
                method: 'GET',
            });
        });
    }
}
exports.Webhooks = Webhooks;
