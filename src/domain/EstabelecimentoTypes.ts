import { ObjectId } from "mongodb";
import {ILocalizacao, IEndereco} from "./CommonTypes";

export interface IEstabelecimento {
    _id?: ObjectId;
    nomeExibicao: string;
    cnpj: string;
    cpf:string;
    endereco: IEndereco;    
    localizacao: ILocalizacao;
    municipioId: ObjectId;
    enderecosRetirada?: IEndereco[];
    valorEntregaBase?: number;
    valorKmAdicional?: number;
    entregaBaseMts?: number;
    requiredNearPlaceToConfirmStartRide?: boolean;
    requiredNearClientToConfirm?: boolean;
    requiredNearplaceToConfirmReturnRide?: boolean;
    needCheckToConfirmReturnRide?: boolean;
    qtdMaxEntregaGroup?: number;
    maxDistanceDropsToGroup?: number;
    qlBankAccountId?: ObjectId;
}

export interface ISaveEstabelecimentoParams {
    nomeExibicao: string;
    cnpj: string;
    cpf: string;
    endereco: IEndereco;    
    localizacao: ILocalizacao;
    municipioId: ObjectId;
    enderecosRetirada?: IEndereco[];
    valorEntregaBase?: string;
    valorKmAdicional?: string;
    entregaBaseMts?: string;
    requiredNearPlaceToConfirmStartRide?: boolean;
    requiredNearClientToConfirm?: boolean;
    requiredNearplaceToConfirmReturnRide?: boolean;
    needCheckToConfirmReturnRide?: boolean;
    qtdMaxEntregaGroup?: string;
    maxDistanceDropsToGroup?: string;
    qlBankAccountId?: ObjectId;
}