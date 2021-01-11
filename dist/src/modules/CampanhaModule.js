"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const MongoDb_1 = require("../data/MongoDb");
const CampanhaRouter_1 = __importDefault(require("../routes/CampanhaRouter"));
const CampanhaController_1 = __importDefault(require("../controller/CampanhaController"));
const CampanhaRepository_1 = __importDefault(require("../repository/CampanhaRepository"));
const CampanhaCommand_1 = __importDefault(require("../command/CampanhaCommand"));
class CampanhaModule {
    static configure(app, db) {
        this.configureDI(db);
        this.configureRoutes(app);
    }
    static configureRoutes(app) {
        app.use('/campanhas', CampanhaRouter_1.default.getRoutesStatic());
    }
    static configureDI(db) {
        this.configureDBDI(db);
        this.configureClassDI();
    }
    static configureDBDI(db) {
        tsyringe_1.container.register('CampanhaCollection', {
            useValue: db.collection(MongoDb_1.collections.campanha),
        });
    }
    static configureClassDI() {
        tsyringe_1.container.register('CampanhaRepository', {
            useClass: CampanhaRepository_1.default,
        });
        tsyringe_1.container.register('CampanhaCommand', {
            useClass: CampanhaCommand_1.default,
        });
        tsyringe_1.container.register('CampanhaController', {
            useClass: CampanhaController_1.default,
        });
        tsyringe_1.container.register('CampanhaRouter', {
            useClass: CampanhaRouter_1.default,
        });
    }
}
exports.default = CampanhaModule;
