import Entity from "./Entity";
import { ObjectId } from "mongodb";
import {ICorrida, ISaveCorridaParams, TStatusCorrida} from "./CorridaType";
import ValidationBuilder from "helpers/ValidationBuilder";
import { isEmpty } from "lodash";
import {toArrayObj, toObjectId} from "../helpers/Utils"

class CorridaModel extends Entity implements ICorrida {
    constructor(               
        public statusCorrida: TStatusCorrida,
        public entregadorId?: ObjectId, 
        public municipioId?: ObjectId,
        public estabelecimentoIds?: ObjectId[],
        public entregaIds?: ObjectId[],   
    ){
        super()
    }

    validate(): boolean {
        this.validator.clear();

        this.validator.setValidations([           
            ValidationBuilder.field(this.entregadorId, 'entregadorId').isRequired(),
            ValidationBuilder.field(this.estabelecimentoIds, 'estabelecimentoIds').minArray(1),
            ValidationBuilder.field(this.entregaIds, 'entregaIds').minArray(1),
            ValidationBuilder.field(this.municipioId, 'municipioId').isRequired(),
            
        ]);        

        return this.validator.isValid();
    }       

    static Create({
        entregadorId,
        statusCorrida,
        municipioId,
        estabelecimentoIds,
        entregaIds
    }: ISaveCorridaParams): ICorrida {               

        const corrida = new CorridaModel(    
            statusCorrida,
            toObjectId(entregadorId),            
            toObjectId(municipioId),    
            toArrayObj(estabelecimentoIds),
            toArrayObj(entregaIds)
        );

        corrida.validate();

        return corrida;
    }
}

export default CorridaModel;