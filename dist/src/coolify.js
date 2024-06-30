function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
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
export var Coolify = /*#__PURE__*/ function() {
    "use strict";
    function Coolify(instance) {
        _class_call_check(this, Coolify);
        _define_property(this, "_instance", void 0);
        _define_property(this, "applications", new Applications(this));
        _define_property(this, "utils", new Utils(this));
        _define_property(this, "envs", new Envs(this));
        _define_property(this, "teams", new Teams(this));
        _define_property(this, "projects", new Projects(this));
        _define_property(this, "servers", new Servers(this));
        _define_property(this, "resources", new Resources(this));
        _define_property(this, "webhooks", new Webhooks(this));
        var _this = this;
        _define_property(this, "fetchRequest", function() {
            var _ref = _async_to_generator(function(param) {
                var path, method, body, _param_requestOptions, requestOptions, headers, rest, response, err;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            path = param.path, method = param.method, body = param.body, _param_requestOptions = param.requestOptions, requestOptions = _param_requestOptions === void 0 ? {} : _param_requestOptions;
                            headers = requestOptions.headers, rest = _object_without_properties(requestOptions, [
                                "headers"
                            ]);
                            requestOptions = _object_spread_props(_object_spread({}, rest), {
                                headers: _object_spread({
                                    'Content-Type': 'application/json',
                                    Authorization: "Bearer ".concat(_this.instance.apiToken)
                                }, headers)
                            });
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                fetch("".concat(_this.instance.url, "/").concat(_this._instance.version).concat(path), _object_spread_props(_object_spread({
                                    method: method
                                }, requestOptions), {
                                    body: JSON.stringify(body)
                                }))
                            ];
                        case 2:
                            response = _state.sent();
                            return [
                                2,
                                response.json()
                            ];
                        case 3:
                            err = _state.sent();
                            throw err;
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
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
    _create_class(Coolify, [
        {
            key: "instance",
            get: function get() {
                return this._instance;
            }
        }
    ]);
    return Coolify;
}();
