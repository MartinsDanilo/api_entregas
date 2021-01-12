import { ObjectId } from "mongodb";

export interface ILocalizacao {
    latitude: string;
    longitude: string;
}

export type Estabelecimento = {
    _id: ObjectId;
    nomeExibicao: string;
    cnpj: string;
    cpf:string;
    endereco: string;
    enderecosRetirada: string[];
    localizacao: ILocalizacao;
    municipioId: ObjectId;
    valorEntregaBase: number;
    valorKmAdicional: number;
    entregaBaseMts: number;
    requiredNearPlaceToConfirmStartRide: boolean;
    requiredNearClientToConfirm: boolean;
    requiredNearplaceToConfirmReturnRide: boolean;
    needCheckToConfirmReturnRide: boolean;
    qtdMaxEntregaGroup: number;
    maxDistanceDropsToGroup: number;
    qlBankAccountId: ObjectId;
}

export type SaveEstabelecimentoParams = {
    nomeExibicao: string;
    cnpj: string;
    cpf:string;
    endereco: string;
    enderecosRetirada: string[];
    localizacao: ILocalizacao;
    municipioId: ObjectId;
    valorEntregaBase: number;
    valorKmAdicional: number;
    entregaBaseMts: number;
    requiredNearPlaceToConfirmStartRide: boolean;
    requiredNearClientToConfirm: boolean;
    requiredNearplaceToConfirmReturnRide: boolean;
    needCheckToConfirmReturnRide: boolean;
    qtdMaxEntregaGroup: number;
    maxDistanceDropsToGroup: number;
    qlBankAccountId: ObjectId;
}