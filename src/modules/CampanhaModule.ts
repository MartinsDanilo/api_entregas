import 'reflect-metadata';

import { container } from 'tsyringe';
import { Application } from 'express';
import { Db } from 'mongodb';

import { collections } from '../data/MongoDb';
import { Campanha } from '../domain/CampanhaTypes';

import CampanhaRouter from '../routes/CampanhaRouter';
import CampanhaController from '../controller/CampanhaController';
import CampanhaRepository from '../repository/CampanhaRepository';
import CampanhaCommand from '../command/CampanhaCommand';

class CampanhaModule {
    static configure(app: Application, db: Db): void {
        this.configureDI(db);
        this.configureRoutes(app);
    }

    static configureRoutes(app: Application): void {
        app.use('/campanhas', CampanhaRouter.getRoutesStatic());
    }

    static configureDI(db: Db): void {
        this.configureDBDI(db);
        this.configureClassDI();
    }

    static configureDBDI(db: Db): void {
        container.register('CampanhaCollection', {
            useValue: db.collection<Campanha>(collections.campanha),
        });
    }

    static configureClassDI(): void {
        container.register('CampanhaRepository', {
            useClass: CampanhaRepository,
        });

        container.register('CampanhaCommand', {
            useClass: CampanhaCommand,
        });

        container.register('CampanhaController', {
            useClass: CampanhaController,
        });

        container.register('CampanhaRouter', {
            useClass: CampanhaRouter,
        });
    }
}

export default CampanhaModule;
