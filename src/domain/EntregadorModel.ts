import { ObjectId } from "mongodb";
import Entity from "./Entity";
import {
    TStatus, 
    IEnderecoResidencial, 
    ICNH, 
    TTipoVeiculo, 
    IDocumentoVeiculo,
    IContaBancaria,
    Entregador,
    SaveEntregadorParams

} from "./EntregadorTypes"


class EntregadorModel extends Entity implements Entregador {
    constructor(
        public MunicipioId: ObjectId,
        public Codigo: string,
        public Nome: string,
        public status: TStatus,
        public cpf: string,
        public cnpj: string,
        public dataNascimento: string,
        public enderecoResidencia: IEnderecoResidencial,
        public cnh: ICNH,
        public fotoCnh: string,
        public fotoPessoal: string,
        public tipoVeiculo: TTipoVeiculo,
        public fotoDocumentoVeiculo: string,
        public documentoVeiculo: IDocumentoVeiculo,
        public celular: string,
        public email: string,
        public senha: string,
        public contaBancaria: IContaBancaria,
        public qlBankAccountId: ObjectId,
    ){
        super()
    }

    static create({
        MunicipioId,
        Codigo,
        Nome,
        status,
        cpf,
        cnpj,
        dataNascimento,
        enderecoResidencia,
        cnh,
        fotoCnh,
        fotoPessoal,
        tipoVeiculo,
        fotoDocumentoVeiculo,
        documentoVeiculo,
        celular,
        email,
        senha,
        contaBancaria,
        qlBankAccountId,
    }: SaveEntregadorParams): Entregador | string[] {

        const entregador = new EntregadorModel(
            MunicipioId,
            Codigo,
            Nome,
            status,
            cpf,
            cnpj,
            dataNascimento,
            enderecoResidencia,
            cnh,
            fotoCnh,
            fotoPessoal,
            tipoVeiculo,
            fotoDocumentoVeiculo,
            documentoVeiculo,
            celular,
            email,
            senha,
            contaBancaria,
            qlBankAccountId
        );        

        return entregador;
    }

}

export default EntregadorModel;
