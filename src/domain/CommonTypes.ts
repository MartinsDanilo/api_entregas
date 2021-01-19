import { ObjectId } from "mongodb";

export interface ILocalizacao {
    latitude: string;
    longitude: string;
}

export interface IEndereco {
    logradouro: string;
    numero: string;
    bairro: string;
    municipioId: ObjectId;
    cep: string;
    referencia: string;
    complemento?: string;    
}
