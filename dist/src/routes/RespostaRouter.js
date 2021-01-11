"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const constants_1 = require("../constants");
const RouterHelpers_1 = __importDefault(require("../helpers/RouterHelpers"));
const RespostaController_1 = __importDefault(require("../controller/RespostaController"));
let RespostaRouter = class RespostaRouter {
    constructor(controller) {
        this.controller = controller;
    }
    static getRoutesStatic() {
        return tsyringe_1.container.resolve('RespostaRouter').getRoutes();
    }
    getRoutes() {
        return (new RouterHelpers_1.default()
            .get(`/campanha/:campanhaId(${constants_1.ObjectId})`, this.controller.getAnswersByCampanhaId)
            .get(`/campanha/:campanhaId(${constants_1.ObjectId})/nuvem-palavras`, this.controller.getWordCloudByCampanhaId)
            .get(`/campanha/:campanhaId(${constants_1.ObjectId})/consolidado`, this.controller.getConsolidadoByCampanhaId)
            .get(`/campanha/:campanhaId(${constants_1.ObjectId})/notas`, this.controller.getGroupedScalesByCampanhaId)
            .post('/', this.controller.create)
            .post(`/:respostaId(${constants_1.ObjectId})/motivos-categorizados`, this.controller.createCategorizedReason)
            .delete(`/:respostaId(${constants_1.ObjectId})/motivos-categorizados`, this.controller.removeCategorizedReason)
            .build());
    }
};
RespostaRouter = __decorate([
    tsyringe_1.autoInjectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof RespostaController_1.default !== "undefined" && RespostaController_1.default) === "function" ? _a : Object])
], RespostaRouter);
exports.default = RespostaRouter;
