"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisArray = exports.RedisURL = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const signale_1 = require("signale");
let client;
let redisDataCache;
let redisRouterCache;
exports.RedisURL = global.process.env.REDIS_URL || '';
const redisMultipleDbs = global.process.env.REDIS_MULTIPLE_DB || false;
const REDIS_DATABASE = redisMultipleDbs
    ? {
        SESSION_CACHE: 0,
        DATA_CACHE: 1,
        ROUTER_CACHE: 2,
    }
    : {
        SESSION_CACHE: '',
        DATA_CACHE: '',
        ROUTER_CACHE: '',
    };
class RedisDb {
    static connect() {
        try {
            signale_1.info('conectando ao RedisDb...');
            signale_1.info(`REDIS_URL: ${exports.RedisURL}/${REDIS_DATABASE.SESSION_CACHE}`);
            client = new ioredis_1.default(`${exports.RedisURL}/${REDIS_DATABASE.SESSION_CACHE}`);
            signale_1.info('conectado ao RedisDb');
            client.on('error', err => {
                signale_1.error(`RedisDb error: ${err}`);
            });
            client.on('ready', () => {
            });
            client.on('connect', () => {
            });
            return client;
        }
        catch (err) {
            signale_1.error(err);
            return null;
        }
    }
    static connectDataCache() {
        try {
            signale_1.info('conectando ao RedisDb Data Cache...');
            signale_1.info(`REDIS_DATA_CACHE_URL: ${exports.RedisURL}/${REDIS_DATABASE.DATA_CACHE}`);
            redisDataCache = new ioredis_1.default(`${exports.RedisURL}/${REDIS_DATABASE.DATA_CACHE}`);
            signale_1.info('conectado ao RedisDb Data Cache');
            redisDataCache.on('error', err => {
                signale_1.error(`RedisDb Data Cache error: ${err}`);
            });
            redisDataCache.on('ready', () => {
            });
            redisDataCache.on('connect', () => {
            });
            return redisDataCache;
        }
        catch (err) {
            signale_1.error(err);
            return null;
        }
    }
    static connectRouterCache() {
        try {
            signale_1.info('conectando ao RedisDb Router Cache...');
            signale_1.info(`REDIS_ROUTER_CACHE_URL: ${exports.RedisURL}/${REDIS_DATABASE.ROUTER_CACHE}`);
            redisRouterCache = new ioredis_1.default(`${exports.RedisURL}/${REDIS_DATABASE.ROUTER_CACHE}`);
            signale_1.info('conectado ao RedisDb Router Cache');
            redisRouterCache.on('error', err => {
                signale_1.error(`RedisDb Router Cache error: ${err}`);
            });
            redisRouterCache.on('ready', () => {
            });
            redisRouterCache.on('connect', () => {
            });
            return redisRouterCache;
        }
        catch (err) {
            signale_1.error(err);
            return null;
        }
    }
    static getClient() {
        if (client) {
            return client;
        }
        const instanceClient = RedisDb.connect();
        client = instanceClient;
        return client;
    }
    static getDataCacheClient() {
        if (redisDataCache) {
            return redisDataCache;
        }
        redisDataCache = RedisDb.connectDataCache();
        return redisDataCache;
    }
    static getRouterCacheClient() {
        if (redisRouterCache) {
            return redisRouterCache;
        }
        redisRouterCache = RedisDb.connectRouterCache();
        return redisRouterCache;
    }
}
class RedisArray {
    constructor(prefixo) {
        this.getAll = async () => {
            try {
                const keys = await this.db.scan(0, 'MATCH', `*${this.prefix}*`, 'COUNT', 30000);
                if (!keys[1] || keys[1].length === 0)
                    return [];
                const values = await this.db.mget(keys[1]);
                const results = values.map(value => {
                    try {
                        return JSON.parse(value);
                    }
                    catch (err) {
                        return value || {};
                    }
                });
                return results;
            }
            catch (ex) {
                signale_1.error(ex.message);
                return [];
            }
        };
        this.setObj = async (key, obj) => {
            const result = await this.db.set(`${this.prefix}${key}`, JSON.stringify(obj));
            return result;
        };
        this.getObj = async (key) => {
            const result = await this.db.get(`${this.prefix}${key}`);
            try {
                return JSON.parse(result);
            }
            catch (err) {
                return result;
            }
        };
        this.removeObj = async (key) => {
            const result = await this.db.del([`${this.prefix}${key}`]);
            return result;
        };
        this.db = client;
        this.prefix = prefixo;
    }
}
exports.RedisArray = RedisArray;
exports.default = RedisDb;
