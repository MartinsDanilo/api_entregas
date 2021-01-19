import { ObjectId } from "mongodb";
import { IEndereco } from './CommonTypes';

export type TTipoConta = "POUPANCA" | "CONTA_FACIL" | "CONTA_CORRENTE";
export type TStatus = "LIBERADO" | "PRECADASTRO" | "BLOQUEADO";
export type TTipoVeiculo = "BIKE" | "MOTO";
export type TCorPlaca = "CINZA" | "VERMELHA" | "PRETA";

export interface ICNH {
    numero: string,
    categoria: string,
    emissao: string,
    validade: string,
    fotoCNH: string
}

export interface IContaBancaria {
    bancoCodigo: string;
    bancoNome: string;
    bancoNomeTransfeera: string;
    bancoAgencia: string;
    bancoAgenciaDigito: string;
    numeroConta: string;
    digitoConta: string;
    cpfCnpjDestinatario: string;
    nomeDestinatario: string;
    comprovanteUrl: string;
    tipoConta: TTipoConta;
}

export interface IDocumentoVeiculo {
	nome: string,
	cpf: string,
	exercicio: string,
	renavam: string,
	anoFabricacao: string,
	anoModelo: string,
	placa: string,
	chassi: string,
	modelo: string,
	corPlaca: TCorPlaca
}

export interface IEntregador {
    _id?: ObjectId;
    municipioId?: ObjectId;
    codigo?: string;
    nome: string;
    status?: TStatus;
    cpf: string;
    cnpj?: string ;
    dataNascimento?: string;
    enderecoResidencia?: IEndereco;
    cnh?: ICNH;
    fotoCnh?: string;
    fotoPessoal?: string;
    tipoVeiculo?: TTipoVeiculo;
    fotoDocumentoVeiculo?: string;
    documentoVeiculo?: IDocumentoVeiculo;
    celular: string;
    email: string;
    senha: string;
    contaBancaria?: IContaBancaria;
    qlBankAccountId?: ObjectId;
}

export interface ISaveEntregadorParams {    
    municipioId?: string;
    codigo?: string;
    nome: string;
    status?: TStatus;
    cpf: string;
    cnpj?: string ;
    dataNascimento?: string;
    enderecoResidencia?: IEndereco;
    cnh?: ICNH;
    fotoCnh?: string;
    fotoPessoal?: string;
    tipoVeiculo?: TTipoVeiculo;
    fotoDocumentoVeiculo?: string;
    documentoVeiculo?: IDocumentoVeiculo;
    celular: string;
    email: string;
    senha: string;
    contaBancaria?: IContaBancaria;
    qlBankAccountId?: string;
}

