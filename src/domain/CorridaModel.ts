import Entity from "./Entity";
import { ObjectId } from "mongodb";
import {ICorrida, ISaveCorridaParams, TStatusCorrida} from "./CorridaType";

class CorridaModel extends Entity implements ICorrida {
    constructor(
        public entregadorId: ObjectId,
        public estabelecimentoIds: ObjectId[],
        public entregaIds: ObjectId[],
        public statusCorrida: TStatusCorrida,
        public municipioId: ObjectId   
    ){
        super()
    }

    static Create({
        entregadorId,
        estabelecimentoIds,
        entregaIds,
        statusCorrida,
        municipioId
    }: ISaveCorridaParams): ICorrida {

        const corrida = new CorridaModel(
            
            entregadorId,
            estabelecimentoIds,
            entregaIds,
            statusCorrida,
            municipioId
        );

        return corrida;
    }
}

export default CorridaModel;