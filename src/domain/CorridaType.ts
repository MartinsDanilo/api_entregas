import { ObjectId } from "mongodb";

export type TStatusCorrida = "INICIADA" | "CANCELADA" | "EM_ADAMENTO" | "FINALIZADA"; 

export interface ICorrida {
    _id?: ObjectId;
    entregadorId?: ObjectId;
    estabelecimentoIds?: ObjectId[];
    entregaIds?: ObjectId[];
    statusCorrida: TStatusCorrida;
    municipioId?: ObjectId   
}
export interface ISaveCorridaParams {
    entregadorId: string;
    estabelecimentoIds: string[];
    entregaIds: string[];
    statusCorrida: TStatusCorrida;
    municipioId: string   
}