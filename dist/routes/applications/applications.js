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
exports.Applications = void 0;
const applications_1 = require("./envs/applications");
class Applications {
    constructor(coolify) {
        this.coolify = coolify;
        this.envs = new applications_1.ApplicationEnvs(this.coolify);
    }
    getApplications() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: '/applications', method: 'GET' });
        });
    }
    createApplication(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: '/applications', method: 'POST', body: payload });
        });
    }
    deleteApplication({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: `/applications/${id}`, method: 'DELETE' });
        });
    }
    deployApplication({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: `/applications/${id}/deploy`, method: 'POST' });
        });
    }
    restartApplication({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: `/applications/${id}/restart`, method: 'POST' });
        });
    }
    stopApplication({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: `/applications/${id}/stop`, method: 'POST' });
        });
    }
}
exports.Applications = Applications;
