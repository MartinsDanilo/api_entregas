"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collections = void 0;
const mongodb_1 = require("mongodb");
const signale_1 = __importDefault(require("signale"));
let dbInstance;
class MongoDb {
    async connect() {
        signale_1.default.info('conectando ao MongoDb...');
        const mongodbUrl = process.env.MONGODB_URL || 'ENV VAR MONGODB_URL IS NOT DEFINED';
        signale_1.default.info(`MONGODB_URL: ${mongodbUrl}`);
        const mongoClient = await mongodb_1.MongoClient.connect(mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        signale_1.default.info(`MONGODB_DATABASE ${process.env.MONGODB_DATABASE || 'UNDEFINED'}`);
        const db = mongoClient.db(process.env.MONGODB_DATABASE);
        signale_1.default.info('conectado ao mongoDb');
        db.on('error', (error) => {
            signale_1.default.error(error);
        });
        return db;
    }
    static async getDb() {
        if (dbInstance) {
            return dbInstance;
        }
        const db = await new MongoDb().connect();
        dbInstance = db;
        return db;
    }
}
exports.collections = {
    admin: 'admin',
    configuracao: 'configuracao',
    usuario: 'usuario',
    analytics: 'analytics',
    campanha: 'campanha',
    resposta: 'resposta',
};
exports.default = MongoDb;
