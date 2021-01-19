import Entity from "./Entity"
import ValidationBuilder from '../helpers/ValidationBuilder';
import {IMunicipio, ISaveMunicipioParams,} from "./MunicipioType"
import { ILocalizacao } from './CommonTypes';
import { isEmpty } from "lodash";

class MunicipioModel extends Entity implements IMunicipio {
    constructor(
        public nome: string,
        public UF: string,
        public localizacao: ILocalizacao,
        public entregaBaseMts?: number,
        public raioMaxDistance?: number,
        public valorKmAdicional?: number,
        public valorEntregaBase?: number,
        public requiredNearPlaceToConfirmStartRide?: boolean,
        public requiredNearClientToConfirm?: boolean,
        public requiredNearplaceToConfirmReturnRide?: boolean,
        public needCheckToConfirmReturnRide?: boolean,
        public qtdMaxEntregaGroup?: number,
        public maxDistanceDropsToGroup?: number,
        ){
        super()
    }

    validateLocalizacao(localizacao: ILocalizacao){
        this.validator.setValidations([
            ValidationBuilder.field(localizacao.latitude, "Latitude").isRequired(),
            ValidationBuilder.field(localizacao.longitude, "Longitude").isRequired()
        ])
    }

    validate(): boolean {
        this.validator.clear()

        this.validateLocalizacao(this.localizacao);    

        this.validator.setValidations([
            ValidationBuilder.field(this.nome, "Nome").isRequired(),
            ValidationBuilder.field(this.UF, "UF").isRequired(),
            ValidationBuilder.field(this.valorEntregaBase, "Valor entrega base é obrigatório").isRequired(),                     
            ValidationBuilder.field(this.valorKmAdicional, "Valor KM adicional é obrigatório").isRequired(),
            ValidationBuilder.field(this.entregaBaseMts, "Entrega base metros é obrigatório").isRequired(),
            ValidationBuilder.field(this.raioMaxDistance, "Raio máximo de distancia é obrigatório").isRequired(),          
        ])

        return this.validator.isValid();
    }

    static Create({
        nome,
        UF,
        localizacao,
        entregaBaseMts,
        raioMaxDistance,
        valorKmAdicional,
        valorEntregaBase
    }: ISaveMunicipioParams): IMunicipio {

        const municipio = new MunicipioModel(
            nome,
            UF,
            localizacao,
            !isEmpty(entregaBaseMts) ? Number.parseFloat(entregaBaseMts) : undefined,
            !isEmpty(raioMaxDistance) ? Number.parseFloat(raioMaxDistance) : undefined,
            !isEmpty(valorKmAdicional) ? Number.parseFloat(valorKmAdicional) : undefined,
            !isEmpty(valorEntregaBase) ? Number.parseFloat(valorEntregaBase) : undefined,
        )

        municipio.validate();

        return municipio;
    }
} 

export default MunicipioModel;