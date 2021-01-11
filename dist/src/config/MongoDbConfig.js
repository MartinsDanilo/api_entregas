"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = __importDefault(require("signale"));
const locale = 'pt';
const defaultCollation = {
    locale,
    strength: 2,
};
const collections = {
    COLLECTION_EX: {
        options: {
            collation: defaultCollation,
        },
        indexes: [
            {
                key: {
                    createdAt: -1,
                },
            },
        ],
    },
};
const config = async (db) => {
    const output = [];
    try {
        signale_1.default.info('Configurando MongoDb');
        output.push('Configurando MongoDb');
        signale_1.default.info('Criando indices');
        output.push('Criando indices');
        await Promise.all(Object.keys(collections).map(async (key) => {
            const collectionConfig = collections[key];
            db.createCollection(key, collectionConfig.options);
            await Promise.all(collectionConfig.indexes.map(async (index) => {
                await db
                    .collection(key)
                    .createIndex(index.key, {
                    ...index.options,
                    background: true,
                });
            }));
        }));
        signale_1.default.info('Indices criados');
        output.push('Indices criados');
        signale_1.default.info('MongoDb configurado');
        output.push('MongoDb configurado');
    }
    catch (ex) {
        signale_1.default.error('Erro ao criar indices');
        output.push('Erro ao criar indices');
        signale_1.default.warn(ex);
    }
    return {
        client: db,
        output,
    };
};
exports.default = config;
