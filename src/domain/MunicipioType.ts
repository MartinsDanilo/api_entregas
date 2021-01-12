import { ObjectId } from "mongodb";

export interface ILocalizacao {
    latitude: string;
    longitude: string;
}

export interface IMunicipio {
    _id: ObjectId;
    nome: string;
    UF: string;
    localizacao: ILocalizacao;
    valorEntregaBase: number;
    valorKmAdicional: number;
    entregaBaseMts: number;
    raioMaxDistance: number;
    requiredNearPlaceToConfirmStartRide: boolean;
    requiredNearClientToConfirm: boolean;
    requiredNearplaceToConfirmReturnRide: boolean;
    needCheckToConfirmReturnRide: boolean;
    qtdMaxEntregaGroup: number;
    maxDistanceDropsToGroup: number;
}

export interface ISaveMunicipio {
    nome: string;
    UF: string;
    localizacao: ILocalizacao;
    valorEntregaBase: number;
    valorKmAdicional: number;
    entregaBaseMts: number;
    raioMaxDistance: number;
    requiredNearPlaceToConfirmStartRide: boolean;
    requiredNearClientToConfirm: boolean;
    requiredNearplaceToConfirmReturnRide: boolean;
    needCheckToConfirmReturnRide: boolean;
    qtdMaxEntregaGroup: number;
    maxDistanceDropsToGroup: number;
}