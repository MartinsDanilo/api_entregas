import { ObjectId } from "mongodb";
import Entity from "./Entity";
import {
    TStatus, 
    IEnderecoResidencial, 
    ICNH, 
    TTipoVeiculo, 
    IDocumentoVeiculo,
    IContaBancaria
} from "./EntregadorTypes"


class Entregador extends Entity{
    MunicipioId: ObjectId;
    Codigo: string;
    Nome: string;
    status: TStatus;
    cpf: string;
    cnpj: string ;
    dataNascimento: string;
    enderecoResidencia: IEnderecoResidencial;
    cnh: ICNH;
    fotoCnh: string;
    fotoPessoal: string;
    tipoVeiculo: TTipoVeiculo;
    fotoDocumentoVeiculo: string;
    documentoVeiculo: IDocumentoVeiculo;
    celular: string;
    email: string;
    senha: string;
    contaBancaria: IContaBancaria;
    qlBankAccountId: ObjectId;

    static create(
        MunicipioId: ObjectId,
        Codigo: string,
        Nome: string,
        status: TStatus,
        cpf: string,
        cnpj: string,
        dataNascimento: string,
        enderecoResidencia: IEnderecoResidencial,
        cnh: ICNH,
        fotoCnh: string,
        fotoPessoal: string,
        tipoVeiculo: TTipoVeiculo,
        fotoDocumentoVeiculo: string,
        documentoVeiculo: IDocumentoVeiculo,
        celular: string,
        email: string,
        senha: string,
        contaBancaria: IContaBancaria,
        qlBankAccountId: ObjectId,
    ): Entregador {

        const entregador = new Entregador();

        entregador.MunicipioId = MunicipioId;
        entregador.Codigo = Codigo;
        entregador.Nome = Nome;
        entregador.status = status;
        entregador.cpf = cpf;
        entregador.cnpj = cnpj;
        entregador.dataNascimento = dataNascimento;
        entregador.enderecoResidencia = enderecoResidencia;
        entregador.cnh = cnh;
        entregador.fotoCnh = fotoCnh;
        entregador.fotoPessoal = fotoPessoal;
        entregador.tipoVeiculo = tipoVeiculo;
        entregador.fotoDocumentoVeiculo = fotoDocumentoVeiculo;
        entregador.documentoVeiculo = documentoVeiculo;
        entregador.celular = celular;
        entregador.email = email;
        entregador.senha = senha;
        entregador.contaBancaria = contaBancaria;
        entregador.qlBankAccountId = qlBankAccountId;


        return entregador;
    }

}

export default Entregador;
