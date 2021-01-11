/* eslint-disable no-param-reassign */
// import QdBotTelegram from '../services/QdBotTelegram';
import { Request, Response, NextFunction } from 'express';
import { warn } from 'signale';
import RedisDb from '../data/RedisDb';

/**
 * @param duration Valor em segundos
 */
const cache = (duration: number) => {
    return async (req: Request, resp: Response, next: NextFunction) => {
        // try {
        //     const key = `_QD_${req.originalUrl}` || req.url;
        //     const redisRouterCache = RedisDb.getRouterCacheClient();
        //     const cachedBody = await redisRouterCache.get(key);
        //     if (cachedBody) {
        //         try {
        //             resp.contentType('application/json; charset=utf-8');
        //             return resp.send(JSON.parse(cachedBody));
        //         } catch (err) {
        //             return resp.send(cachedBody);
        //         }
        //     } else {
        //         resp.sendResponse = resp.send;
        //         resp.send = body => {
        //             redisRouterCache.setex(key, duration, JSON.stringify(body));
        //             return resp.sendResponse(body);
        //         };
        //         next();
        //     }
        // } catch (ex) {
        //     warn(`memoryCacheMiddleware ERROR: ${ex.message}`);
        //     // TODO: Configurar para mandar via telegram a mensagem de erro
        //     // QdBotTelegram.sendLog(`memoryCacheMiddleware ERROR: ${ex.message}`)
        //     next();
        // }
    };
};

export default cache;
