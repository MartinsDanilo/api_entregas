/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { container, autoInjectable } from 'tsyringe';
import { ObjectId, Boolean } from "../constants";
import RouterHelpers from '../helpers/RouterHelpers';
import CampanhaController from '../controller/CampanhaController';
import { CampanhaReportParamType } from '../domain/CampanhaTypes'
// import Docummentation from '../../doc/CampanhaRouterDoc';

import { IRouter } from './BaseRouter';

@autoInjectable()
class CampanhaRouter implements IRouter {
    constructor(private controller: CampanhaController) {}

    static getRoutesStatic(): Router {
        return container.resolve<CampanhaRouter>('CampanhaRouter').getRoutes();
    }

    getRoutes(): Router {
        // TODO: add documentation
        return (
            new RouterHelpers()
                .get('/', this.controller.find)
                .get(`/:campanhaId(${ObjectId})`, this.controller.findOneById)
                .get(`/:campanhaId(${ObjectId})/relatorio/:reportType(${CampanhaReportParamType})`, this.controller.getReportByCampanhaId)
                .get(`/usuario/:usuarioId(${ObjectId})/municipio/:municipioId(${ObjectId})/next`, this.controller.findNextByUsuarioId)
                .get(`/place/:placeId(${ObjectId})/municipio/:municipioId(${ObjectId})/next`, this.controller.findNextByPlaceId)
                .post('/', this.controller.create)
                .post(`/:campanhaId(${ObjectId})/audiencia`, this.controller.saveAudience)
                .put(`/:campanhaId(${ObjectId})`, this.controller.update)
                .put(`/:campanhaId(${ObjectId})/toggle-active/:isAtivo(${Boolean})`, this.controller.toggleActive)
                .build()
        );
    }
}

export default CampanhaRouter;
