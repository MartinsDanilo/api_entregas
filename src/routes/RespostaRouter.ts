/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { container, autoInjectable } from 'tsyringe';
import { ObjectId } from "../constants";
import RouterHelpers from '../helpers/RouterHelpers';
import RespostaController from '../controller/RespostaController';
// import Docummentation from '../../doc/RespostaRouterDoc';

import { IRouter } from './BaseRouter';

@autoInjectable()
class RespostaRouter implements IRouter {
    constructor(private controller: RespostaController) {}

    static getRoutesStatic(): Router {
        return container.resolve<RespostaRouter>('RespostaRouter').getRoutes();
    }

    getRoutes(): Router {
        // TODO: add documentation
        return (
            new RouterHelpers()
                .get(`/campanha/:campanhaId(${ObjectId})`, this.controller.getAnswersByCampanhaId)
                .get(`/campanha/:campanhaId(${ObjectId})/nuvem-palavras`, this.controller.getWordCloudByCampanhaId)
                .get(`/campanha/:campanhaId(${ObjectId})/consolidado`, this.controller.getConsolidadoByCampanhaId)
                .get(`/campanha/:campanhaId(${ObjectId})/notas`, this.controller.getGroupedScalesByCampanhaId)
                .post('/', this.controller.create)
                .post(`/:respostaId(${ObjectId})/motivos-categorizados`, this.controller.createCategorizedReason)
                .delete(`/:respostaId(${ObjectId})/motivos-categorizados`, this.controller.removeCategorizedReason)
                .build()
        );
    }
}

export default RespostaRouter;
