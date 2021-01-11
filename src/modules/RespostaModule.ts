import 'reflect-metadata';

import { container } from 'tsyringe';
import { Application } from 'express';
import { Db } from 'mongodb';

import { collections } from '../data/MongoDb';
import { Resposta } from '../domain/RespostaTypes';

import RespostaRouter from '../routes/RespostaRouter';
import RespostaController from '../controller/RespostaController';
import RespostaRepository from '../repository/RespostaRepository';
import RespostaCommand from '../command/RespostaCommand';

class RespostaModule {
    static configure(app: Application, db: Db): void {
        this.configureDI(db);
        this.configureRoutes(app);
    }

    static configureRoutes(app: Application): void {
        app.use('/respostas', RespostaRouter.getRoutesStatic());
    }

    static configureDI(db: Db): void {
        this.configureDBDI(db);
        this.configureClassDI();
    }

    static configureDBDI(db: Db): void {
        container.register('RespostaCollection', {
            useValue: db.collection<Resposta>(collections.resposta),
        });
    }

    static configureClassDI(): void {
        container.register('RespostaRepository', {
            useClass: RespostaRepository,
        });

        container.register('RespostaCommand', {
            useClass: RespostaCommand,
        });

        container.register('RespostaController', {
            useClass: RespostaController,
        });

        container.register('RespostaRouter', {
            useClass: RespostaRouter,
        });
    }
}

export default RespostaModule;
