import { ObjectId } from "mongodb"
import Entity from "./Entity";
import {Estabelecimento, ILocalizacao, SaveEstabelecimentoParams} from "./EstabelecimentoTypes"

class EstabelecimentoModel extends Entity implements Estabelecimento  {
    constructor(
        public nomeExibicao: string,
        public cnpj: string,
        public cpf:string,
        public endereco: string,
        public enderecosRetirada: string[],
        public localizacao: ILocalizacao,
        public municipioId: ObjectId,
        public valorEntregaBase: number,
        public valorKmAdicional: number,
        public entregaBaseMts: number,
        public requiredNearPlaceToConfirmStartRide: boolean,
        public requiredNearClientToConfirm: boolean,
        public requiredNearplaceToConfirmReturnRide: boolean,
        public needCheckToConfirmReturnRide: boolean,
        public qtdMaxEntregaGroup: number,
        public maxDistanceDropsToGroup: number,
        public qlBankAccountId: ObjectId,
    ){
        super()
    }

    static Create({
        nomeExibicao,
        cnpj,
        cpf,
        endereco,
        enderecosRetirada,
        localizacao,
        municipioId,
        valorEntregaBase,
        valorKmAdicional,
        entregaBaseMts,
        requiredNearPlaceToConfirmStartRide,
        requiredNearClientToConfirm,
        requiredNearplaceToConfirmReturnRide,
        needCheckToConfirmReturnRide,
        qtdMaxEntregaGroup,
        maxDistanceDropsToGroup,
        qlBankAccountId,
    }: SaveEstabelecimentoParams): Estabelecimento {

        const estabelecimento = new EstabelecimentoModel(
            nomeExibicao,
            cnpj,
            cpf,
            endereco,
            enderecosRetirada,
            localizacao,
            municipioId,
            valorEntregaBase,
            valorKmAdicional,
            entregaBaseMts,
            requiredNearPlaceToConfirmStartRide,
            requiredNearClientToConfirm,
            requiredNearplaceToConfirmReturnRide,
            needCheckToConfirmReturnRide,
            qtdMaxEntregaGroup,
            maxDistanceDropsToGroup,
            qlBankAccountId,
        );

        return estabelecimento;
    }    
}

export default EstabelecimentoModel;