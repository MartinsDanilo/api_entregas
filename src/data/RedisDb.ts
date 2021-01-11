/* eslint-disable max-classes-per-file */
import Redis, { Redis as IRedis } from 'ioredis';
import { info, error } from 'signale';

let client: IRedis;

let redisDataCache: IRedis;
let redisRouterCache: IRedis;

export const RedisURL = global.process.env.REDIS_URL || '';
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
    static connect(): IRedis | null {
        try {
            info('conectando ao RedisDb...');

            // info('REDIS_URL: ' + RedisURL);
            info(`REDIS_URL: ${RedisURL}/${REDIS_DATABASE.SESSION_CACHE}`);

            // client = new Redis(RedisURL);
            client = new Redis(`${RedisURL}/${REDIS_DATABASE.SESSION_CACHE}`);

            info('conectado ao RedisDb');

            client.on('error', err => {
                error(`RedisDb error: ${err}`);
            });

            client.on('ready', () => {
                // info("RedisDb ready");
            });
            client.on('connect', () => {
                // info("RedisDb connect");
            });

            return client;
        } catch (err) {
            error(err);
            return null;
        }
    }

    static connectDataCache(): IRedis | null {
        try {
            info('conectando ao RedisDb Data Cache...');

            info(
                `REDIS_DATA_CACHE_URL: ${RedisURL}/${REDIS_DATABASE.DATA_CACHE}`,
            );

            redisDataCache = new Redis(
                `${RedisURL}/${REDIS_DATABASE.DATA_CACHE}`,
            );

            info('conectado ao RedisDb Data Cache');

            redisDataCache.on('error', err => {
                error(`RedisDb Data Cache error: ${err}`);
            });

            redisDataCache.on('ready', () => {
                // info("RedisDb Data Cache ready");
            });
            redisDataCache.on('connect', () => {
                // info("RedisDb Data Cache connect");
            });

            return redisDataCache;
        } catch (err) {
            error(err);
            return null;
        }
    }

    static connectRouterCache(): IRedis | null {
        try {
            info('conectando ao RedisDb Router Cache...');

            info(
                `REDIS_ROUTER_CACHE_URL: ${RedisURL}/${REDIS_DATABASE.ROUTER_CACHE}`,
            );

            redisRouterCache = new Redis(
                `${RedisURL}/${REDIS_DATABASE.ROUTER_CACHE}`,
            );

            info('conectado ao RedisDb Router Cache');

            redisRouterCache.on('error', err => {
                error(`RedisDb Router Cache error: ${err}`);
            });

            redisRouterCache.on('ready', () => {
                // info("RedisDb Router Cache ready");
            });
            redisRouterCache.on('connect', () => {
                // info("RedisDb Router Cache connect");
            });

            return redisRouterCache;
        } catch (err) {
            error(err);
            return null;
        }
    }

    static getClient(): IRedis {
        if (client) {
            return client;
        }
        const instanceClient = RedisDb.connect() as IRedis;
        client = instanceClient;
        return client;
    }

    static getDataCacheClient(): IRedis {
        if (redisDataCache) {
            return redisDataCache;
        }
        redisDataCache = RedisDb.connectDataCache() as IRedis;
        return redisDataCache;
    }

    static getRouterCacheClient(): IRedis {
        if (redisRouterCache) {
            return redisRouterCache;
        }
        redisRouterCache = RedisDb.connectRouterCache() as IRedis;
        return redisRouterCache;
    }
}

export class RedisArray {
    db: IRedis;

    prefix: string;

    constructor(prefixo: string) {
        this.db = client;
        this.prefix = prefixo;
    }

    getAll = async () => {
        try {
            const keys = await this.db.scan(
                0,
                'MATCH',
                `*${this.prefix}*`,
                'COUNT',
                30000,
            );

            if (!keys[1] || keys[1].length === 0) return [];
            const values = await this.db.mget(keys[1]);

            const results = values.map(value => {
                try {
                    return JSON.parse(value as string);
                } catch (err) {
                    return value || {};
                }
            });

            return results;
        } catch (ex) {
            error(ex.message);
            return [];
        }
    };

    setObj = async (key: string, obj: any) => {
        const result = await this.db.set(
            `${this.prefix}${key}`,
            JSON.stringify(obj),
        );

        return result;
    };

    getObj = async (key: string) => {
        const result = await this.db.get(`${this.prefix}${key}`);
        try {
            return JSON.parse(result as string);
        } catch (err) {
            return result;
        }
    };

    removeObj = async (key: string) => {
        const result = await this.db.del([`${this.prefix}${key}`]);

        return result;
    };
}

export default RedisDb;
