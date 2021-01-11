"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const express_1 = __importDefault(require("express"));
const memoryCacheMiddleware_1 = __importDefault(require("../middlewares/memoryCacheMiddleware"));
const Auth_1 = __importDefault(require("../middlewares/Auth"));
class RouterHelpers {
    constructor(router) {
        this.router = router || express_1.default.Router();
    }
    build() {
        return this.router;
    }
    doc(fn) {
        fn();
        return this;
    }
    get(path, method, cacheTime) {
        const handlers = this.generateRequestHandler(method, cacheTime);
        this.router.get(path, ...handlers);
        return this;
    }
    post(path, method, cacheTime) {
        const handlers = this.generateRequestHandler(method, cacheTime);
        this.router.post(path, ...handlers);
        return this;
    }
    put(path, method, cacheTime) {
        const handlers = this.generateRequestHandler(method, cacheTime);
        this.router.put(path, ...handlers);
        return this;
    }
    delete(path, method, cacheTime) {
        const handlers = this.generateRequestHandler(method, cacheTime);
        this.router.delete(path, ...handlers);
        return this;
    }
    generateRequestHandler(method, cacheTime) {
        const requestHandlers = [express_validation_1.validate(method.schema), Auth_1.default];
        if (cacheTime) {
            requestHandlers.push(memoryCacheMiddleware_1.default(cacheTime));
        }
        requestHandlers.push(method.fn);
        return requestHandlers;
    }
}
exports.default = RouterHelpers;
