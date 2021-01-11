import { ObjectId } from "mongodb";
import Entity from "./Entity";

type TipoConta = "POUPANCA" | "CONTA_FACIL" | "CONTA_CORRENTE";
type Status = "LIBERADO" | "PRECADASTRO" | "BLOQUEADO";

type EnderecoResidencial = {
    CEP: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    municipio: string,
    municipioId: ObjectId,
}

type TipoVeiculo = "BIKE" | "MOTO";

type CNH = {
    numero: string,
    categoria: string,
    emissao: string,
    validade: string,
    fotoCNH: string
}

type ContaBancaria = {
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
    tipoConta: TipoConta;
}

type CorPlaca = "CINZA" | "VERMELHA" | "PRETA";

type DocumentoVeiculo = {
	nome: string,
	cpf: string,
	exercicio: string,
	renavam: string,
	anoFabricacao: string,
	anoModelo: string,
	placa: string,
	chassi: string,
	modelo: string,
	corPlaca: CorPlaca
}

class Entregador extends Entity{
    MunicipioId: ObjectId;
    Codigo: string;
    Nome: string;
    status: Status;
    cpf: string;
    cnpj: string ;
    dataNascimento: string;
    enderecoResidencia: EnderecoResidencial;
    cnh: CNH;
    fotoCnh: string;
    fotoPessoal: string;
    tipoVeiculo: TipoVeiculo;
    fotoDocumentoVeiculo: string;
    documentoVeiculo: DocumentoVeiculo;
    celular: string;
    email: string;
    senha: string;
    contaBancaria: ContaBancaria;
    qlBankAccountId: ObjectId;

    static create(
        MunicipioId: ObjectId,
        Codigo: string,
        Nome: string,
        status: Status,
        cpf: string,
        cnpj: string,
        dataNascimento: string,
        enderecoResidencia: EnderecoResidencial,
        cnh: CNH,
        fotoCnh: string,
        fotoPessoal: string,
        tipoVeiculo: TipoVeiculo,
        fotoDocumentoVeiculo: string,
        documentoVeiculo: DocumentoVeiculo,
        celular: string,
        email: string,
        senha: string,
        contaBancaria: ContaBancaria,
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
