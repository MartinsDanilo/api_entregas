import ValidationBuilder from '../helpers/ValidationBuilder';
import { ObjectId } from "mongodb";
import Entity from "./Entity";
import {
    TStatus,  
    ICNH, 
    TTipoVeiculo, 
    IDocumentoVeiculo,
    IContaBancaria,
    IEntregador,
    ISaveEntregadorParams

} from "./EntregadorTypes"
import { IEndereco } from './CommonTypes';
import { isEmpty } from 'lodash';


class EntregadorModel extends Entity implements IEntregador {
    constructor(               
        public nome: string,        
        public cpf: string,              
        public celular: string,
        public email: string,
        public senha: string,
        public municipioId?: ObjectId, 
        public fotoCnh?: string,
        public fotoPessoal?: string,
        public tipoVeiculo?: TTipoVeiculo,
        public fotoDocumentoVeiculo?: string,
        public documentoVeiculo?: IDocumentoVeiculo,
        public cnpj?: string,
        public dataNascimento?: string,
        public enderecoResidencia?: IEndereco,
        public cnh?: ICNH,
        public status?: TStatus,
        public codigo?: string,
        public contaBancaria?: IContaBancaria,
        public qlBankAccountId?: ObjectId,
    ){
        super()
    }
    validate(): boolean {
        this.validator.clear()

        this.validator.setValidations([
            ValidationBuilder.field(this.nome, "Nome Completo").isRequired(),
            ValidationBuilder.field(this.email, "E-mail").isRequired().isEmail(),
            ValidationBuilder.field(this.cpf, "CPF").isRequired().isCPF(),                     
            ValidationBuilder.field(this.celular, "Telefone").isRequired(),
            ValidationBuilder.field(this.municipioId, "municipioId").isRequired(),
            ValidationBuilder.field(this.senha, "Senha").min(3).isRequired(),          
        ])

        return this.validator.isValid();
    }

    static create({
        municipioId,        
        nome,        
        cpf,
        celular,
        email,
        senha,        
    }: ISaveEntregadorParams): IEntregador | string[] {

        const entregador = new EntregadorModel(            
            nome,        
            cpf,
            celular,
            email,
            senha,
            !isEmpty(municipioId) ? new ObjectId(municipioId) : undefined
        );       
        
        debugger

        entregador.validate();

        return entregador;
    }

}

export default EntregadorModel;
