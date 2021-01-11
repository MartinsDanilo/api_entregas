"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const MongoDb_1 = require("../data/MongoDb");
const RespostaRouter_1 = __importDefault(require("../routes/RespostaRouter"));
const RespostaController_1 = __importDefault(require("../controller/RespostaController"));
const RespostaRepository_1 = __importDefault(require("../repository/RespostaRepository"));
const RespostaCommand_1 = __importDefault(require("../command/RespostaCommand"));
class RespostaModule {
    static configure(app, db) {
        this.configureDI(db);
        this.configureRoutes(app);
    }
    static configureRoutes(app) {
        app.use('/respostas', RespostaRouter_1.default.getRoutesStatic());
    }
    static configureDI(db) {
        this.configureDBDI(db);
        this.configureClassDI();
    }
    static configureDBDI(db) {
        tsyringe_1.container.register('RespostaCollection', {
            useValue: db.collection(MongoDb_1.collections.resposta),
        });
    }
    static configureClassDI() {
        tsyringe_1.container.register('RespostaRepository', {
            useClass: RespostaRepository_1.default,
        });
        tsyringe_1.container.register('RespostaCommand', {
            useClass: RespostaCommand_1.default,
        });
        tsyringe_1.container.register('RespostaController', {
            useClass: RespostaController_1.default,
        });
        tsyringe_1.container.register('RespostaRouter', {
            useClass: RespostaRouter_1.default,
        });
    }
}
exports.default = RespostaModule;
