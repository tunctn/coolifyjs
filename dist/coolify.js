"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coolify = void 0;
const applications_1 = require("./routes/applications/applications");
const envs_1 = require("./routes/envs/envs");
const projects_1 = require("./routes/projects/projects");
const resources_1 = require("./routes/resources/resources");
const servers_1 = require("./routes/servers/servers");
const teams_1 = require("./routes/teams/teams");
const utils_1 = require("./routes/utils/utils");
const webhooks_1 = require("./routes/webhooks/webhooks");
__exportStar(require("./routes/applications"), exports);
__exportStar(require("./routes/envs"), exports);
__exportStar(require("./routes/projects"), exports);
__exportStar(require("./routes/resources"), exports);
__exportStar(require("./routes/servers"), exports);
__exportStar(require("./routes/teams"), exports);
__exportStar(require("./routes/utils"), exports);
__exportStar(require("./routes/webhooks"), exports);
class Coolify {
    constructor(instance) {
        this.applications = new applications_1.Applications(this);
        this.utils = new utils_1.Utils(this);
        this.envs = new envs_1.Envs(this);
        this.teams = new teams_1.Teams(this);
        this.projects = new projects_1.Projects(this);
        this.servers = new servers_1.Servers(this);
        this.resources = new resources_1.Resources(this);
        this.webhooks = new webhooks_1.Webhooks(this);
        this.fetchRequest = ({ path, method, body, requestOptions = {} }) => __awaiter(this, void 0, void 0, function* () {
            const { headers } = requestOptions, rest = __rest(requestOptions, ["headers"]);
            requestOptions = Object.assign(Object.assign({}, rest), { headers: Object.assign({ 'Content-Type': 'application/json', Authorization: `Bearer ${this.instance.apiToken}` }, headers) });
            try {
                const response = yield fetch(`${this.instance.url}/${this._instance.version}${path}`, Object.assign(Object.assign({ method }, requestOptions), { body: JSON.stringify(body) }));
                return response.json();
            }
            catch (err) {
                throw err;
            }
        });
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
}
exports.Coolify = Coolify;
