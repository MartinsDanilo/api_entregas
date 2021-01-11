import { Request, Response, NextFunction } from 'express';
import SecurityService from '../services/SecurityService';

const UNAUTHORIZED = {
    code: 401,
    json: {
        r: false,
        errors: ['401 - UNAUTHORIZED'],
    },
};

const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new Error('Authorization não informado');
        }

        if (!authorization?.match(/Basic/)) {
            throw new Error('Authorization em formato desconhecido');
        }

        const token = authorization?.split(' ')[1];

        if (!token) {
            throw new Error('Token não informado');
        }

        const isValid = await SecurityService.authTokenRoot(token);

        if (!isValid) {
            throw new Error('Token inválido');
        }

        next();
    } catch (error) {
        return res.status(UNAUTHORIZED.code).send(UNAUTHORIZED.json);
    }
};

export default Auth;
