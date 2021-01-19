import { ObjectId } from "mongodb";
import {ILocalizacao} from "./CommonTypes"

export interface IMunicipio {
    _id?: ObjectId;
    nome: string;
    UF: string;
    localizacao: ILocalizacao;
    valorEntregaBase?: number;
    valorKmAdicional?: number;
    entregaBaseMts?: number;
    raioMaxDistance?: number;
    requiredNearPlaceToConfirmStartRide?: boolean;
    requiredNearClientToConfirm?: boolean;
    requiredNearplaceToConfirmReturnRide?: boolean;
    needCheckToConfirmReturnRide?: boolean;
    qtdMaxEntregaGroup?: number;
    maxDistanceDropsToGroup?: number;
}

export interface ISaveMunicipioParams {
    nome: string;
    UF: string;
    localizacao: ILocalizacao;
    valorEntregaBase: string;
    valorKmAdicional: string;
    entregaBaseMts: string;
    raioMaxDistance: string;
    requiredNearPlaceToConfirmStartRide?: boolean;
    requiredNearClientToConfirm?: boolean;
    requiredNearplaceToConfirmReturnRide?: boolean;
    needCheckToConfirmReturnRide?: boolean;
    qtdMaxEntregaGroup?: string;
    maxDistanceDropsToGroup?: string;
}