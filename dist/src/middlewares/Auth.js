"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SecurityService_1 = __importDefault(require("../services/SecurityService"));
const UNAUTHORIZED = {
    code: 401,
    json: {
        r: false,
        errors: ['401 - UNAUTHORIZED'],
    },
};
const Auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error('Authorization não informado');
        }
        if (!(authorization === null || authorization === void 0 ? void 0 : authorization.match(/Basic/))) {
            throw new Error('Authorization em formato desconhecido');
        }
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
        if (!token) {
            throw new Error('Token não informado');
        }
        const isValid = await SecurityService_1.default.authTokenRoot(token);
        if (!isValid) {
            throw new Error('Token inválido');
        }
        next();
    }
    catch (error) {
        return res.status(UNAUTHORIZED.code).send(UNAUTHORIZED.json);
    }
};
exports.default = Auth;
