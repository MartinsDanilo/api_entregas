import { ObjectId } from "mongodb";

export interface IManager {
    _id: ObjectId;
    email: string;
    nome: string;
    senha: string;
    celular: string;
}
export interface ISaveManagerParams {
    email: string;
    nome: string;
    senha: string;
    celular: string;
}