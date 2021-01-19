import ValidationBuilder from '../helpers/ValidationBuilder';
import { ObjectId } from "mongodb"
import Entity from "./Entity";
import {IEstabelecimento, ISaveEstabelecimentoParams} from "./EstabelecimentoTypes"
import { ILocalizacao, IEndereco } from './CommonTypes';

class IEstabelecimentoModel extends Entity implements IEstabelecimento  {
    constructor(
        public nomeExibicao: string,
        public cnpj: string,
        public cpf:string,
        public endereco: IEndereco,        
        public localizacao: ILocalizacao,
        public municipioId: ObjectId,
        public enderecosRetirada?: IEndereco[],
        public valorEntregaBase?: number,
        public valorKmAdicional?: number,
        public entregaBaseMts?: number,
        public requiredNearPlaceToConfirmStartRide?: boolean,
        public requiredNearClientToConfirm?: boolean,
        public requiredNearplaceToConfirmReturnRide?: boolean,
        public needCheckToConfirmReturnRide?: boolean,
        public qtdMaxEntregaGroup?: number,
        public maxDistanceDropsToGroup?: number,
        public qlBankAccountId?: ObjectId,
    ){
        super()
    }

    validateEndereco(endereco: IEndereco) {
        this.validator.setValidations([
            ValidationBuilder.field(endereco.bairro, "Bairro").isRequired(),
            ValidationBuilder.field(endereco.logradouro, "Logradouro").isRequired(),
            ValidationBuilder.field(endereco.numero, "Número").isRequired(),
            ValidationBuilder.field(endereco.municipioId, "MunicipioId").isRequired(),
            ValidationBuilder.field(endereco.cep, "CEP").isRequired(),
            ValidationBuilder.field(endereco.referencia, "Referência").isRequired(),            
        ])
    }    

    validateLocalizacao(localizacao: ILocalizacao){
        this.validator.setValidations([
            ValidationBuilder.field(localizacao.latitude, "Latitude").isRequired(),
            ValidationBuilder.field(localizacao.longitude, "Longitude").isRequired()
        ])
    }

    validate(): boolean {
        this.validator.clear();

        this.validateEndereco(this.endereco);         
        this.validateLocalizacao(this.localizacao);      


        this.validator.setValidations([
            ValidationBuilder.field(this.nomeExibicao, "Nome Exibição").isRequired(),
            //Precisa verificar se o cpf ou cnpj eh valido
            ValidationBuilder.field(this.cpf, "CPF", this.cnpj, "CNPJ").oneOrOtherIsRequired(),
            ValidationBuilder.field(this.municipioId, "municipioId").isRequired(),                      
        ])

        return this.validator.isValid();
    }

    static Create({
        nomeExibicao,
        cnpj,
        cpf,
        endereco,        
        localizacao,
        municipioId,
    }: ISaveEstabelecimentoParams): IEstabelecimento {

        const estabelecimento = new IEstabelecimentoModel(
            nomeExibicao,
            cnpj,
            cpf,
            endereco as IEndereco,            
            localizacao as ILocalizacao,
            new ObjectId(municipioId),
        );

        estabelecimento.validate();

        return estabelecimento;
    }    
}

export default IEstabelecimentoModel;