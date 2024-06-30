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
exports.Teams = void 0;
class Teams {
    constructor(coolify) {
        this.coolify = coolify;
    }
    getTeams() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: '/teams', method: 'GET' });
        });
    }
    getCurrentTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: '/teams/current', method: 'GET' });
        });
    }
    getCurrentTeamMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: '/teams/current/members', method: 'GET' });
        });
    }
    getTeam({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: `/teams/${id}`, method: 'GET' });
        });
    }
    getTeamMembers({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coolify.fetchRequest({ path: `/teams/${id}/members`, method: 'GET' });
        });
    }
}
exports.Teams = Teams;
