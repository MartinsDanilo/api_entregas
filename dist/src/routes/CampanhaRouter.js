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
const CampanhaController_1 = __importDefault(require("../controller/CampanhaController"));
const CampanhaTypes_1 = require("../domain/CampanhaTypes");
let CampanhaRouter = class CampanhaRouter {
    constructor(controller) {
        this.controller = controller;
    }
    static getRoutesStatic() {
        return tsyringe_1.container.resolve('CampanhaRouter').getRoutes();
    }
    getRoutes() {
        return (new RouterHelpers_1.default()
            .get('/', this.controller.find)
            .get(`/:campanhaId(${constants_1.ObjectId})`, this.controller.findOneById)
            .get(`/:campanhaId(${constants_1.ObjectId})/relatorio/:reportType(${CampanhaTypes_1.CampanhaReportParamType})`, this.controller.getReportByCampanhaId)
            .get(`/usuario/:usuarioId(${constants_1.ObjectId})/municipio/:municipioId(${constants_1.ObjectId})/next`, this.controller.findNextByUsuarioId)
            .get(`/place/:placeId(${constants_1.ObjectId})/municipio/:municipioId(${constants_1.ObjectId})/next`, this.controller.findNextByPlaceId)
            .post('/', this.controller.create)
            .post(`/:campanhaId(${constants_1.ObjectId})/audiencia`, this.controller.saveAudience)
            .put(`/:campanhaId(${constants_1.ObjectId})`, this.controller.update)
            .put(`/:campanhaId(${constants_1.ObjectId})/toggle-active/:isAtivo(${constants_1.Boolean})`, this.controller.toggleActive)
            .build());
    }
};
CampanhaRouter = __decorate([
    tsyringe_1.autoInjectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof CampanhaController_1.default !== "undefined" && CampanhaController_1.default) === "function" ? _a : Object])
], CampanhaRouter);
exports.default = CampanhaRouter;
