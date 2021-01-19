import ValidationBuilder from '../helpers/ValidationBuilder';
import { ObjectId } from "mongodb";
import Entity from "./Entity";
import {IEntrega, 
        ISaveEntregaParams,              
        TStatusEntrega, 
        TFormaPagamento} from "./EntregaTypes"
import { isEmpty } from 'lodash';
import { ILocalizacao, IEndereco } from './CommonTypes';



class EntregaModel extends Entity implements IEntrega {
    constructor(
        public enderecoOrigem: IEndereco,
        public localizacaoOrigem: ILocalizacao,
        public enderecoDestino: IEndereco,
        public localizacaoDestino: ILocalizacao,          
        public estabelecimentoId: ObjectId,            
        public formaPagamento: TFormaPagamento,
        public nomeDestinatario: string,
        public telefoneDestinatario: string,										
        public status: TStatusEntrega,        
        public solicitadoAt: Date,
        public rotaDistancia?: number,    
        public valorEntregador?: number,
        public valorEntrega?: number,
        public troco?: number,
        public distanciaEntregadorEstabelecimentoRadial?: number,
        public entregadorId?: ObjectId,        
        public aceiteAt?: Date,
        public cancelamentoAt?: Date,
        public horaPriorizacaoAt?: Date,
        public saidaClienteAt?: Date,
        public retornoLojaAt?: Date,       
        public chegouLojaAt?: Date,
        public associadoAt?: Date,
        public saindoLojaAt?: Date,
        public saiuLojaAt?: Date,
        public chegouClienteAt?: Date,
        public finalizadoAt?: Date
    ){
        super()
    }

    validateEndereco(endereco: IEndereco) {
        this.validator.setValidations([
            ValidationBuilder.field(endereco.bairro, "Bairro").isRequired(),
            ValidationBuilder.field(endereco.logradouro, "Logradouro").isRequired(),
            ValidationBuilder.field(endereco.numero, "Número").isRequired(),
            ValidationBuilder.field(endereco.municipioId, "MunicipioId").isRequired(),
            ValidationBuilder.field(endereco.cep, "CEP").isRequired(),
            ValidationBuilder.field(endereco.referencia, "Referência").isRequired(),            
        ])
    }

    validateLocalizacao(localizacaoDestino: ILocalizacao){
        ValidationBuilder.field(localizacaoDestino.latitude, "Latitude").isRequired(),
        ValidationBuilder.field(localizacaoDestino.longitude, "Longitude").isRequired()
    }

    validate(): boolean {
        this.validator.clear()

        debugger

        this.validateEndereco(this.enderecoOrigem);
        this.validateEndereco(this.enderecoDestino);
        this.validateLocalizacao(this.localizacaoOrigem);
        this.validateLocalizacao(this.localizacaoDestino);

        this.validator.setValidations([
            ValidationBuilder.field(this.estabelecimentoId, "estabelecimentoId é obrigatório").isRequired(),
            ValidationBuilder.field(this.formaPagamento, "Forma de pagamento").isRequired(),
            ValidationBuilder.field(this.nomeDestinatario, "Nome do destinatário é obrigatório").isRequired(),
            ValidationBuilder.field(this.telefoneDestinatario, "Telefone do destinatário é obrigatório").isRequired(),
            ValidationBuilder.field(this.status, "Status").isRequired(),
            ValidationBuilder.field(this.valorEntrega, "Valor da entrega é obrigatório").isRequired(),         
            ValidationBuilder.field(this.rotaDistancia, "Distância da rota é obrigatório").isRequired(),
            ValidationBuilder.field(this.solicitadoAt, "SolicitadoAt").isRequired(),       
        ])

        return this.validator.isValid();
    }
    
    static Create ({
        enderecoOrigem,
        localizacaoOrigem,
        enderecoDestino,
        localizacaoDestino,
        valorEntrega,
        rotaDistancia,
        estabelecimentoId,
        formaPagamento,
        nomeDestinatario,
        telefoneDestinatario,
        status,
        valorEntregador,
        solicitadoAt,
    }: ISaveEntregaParams): IEntrega | string[] {        
        
        const entrega = new EntregaModel(
            enderecoOrigem as IEndereco,
            localizacaoOrigem as ILocalizacao,
            enderecoDestino as IEndereco,
            localizacaoDestino as ILocalizacao,    
            new ObjectId(estabelecimentoId),
            formaPagamento,                            
            nomeDestinatario,
            telefoneDestinatario,										
            status,            
            solicitadoAt = new Date(),
            !isEmpty(rotaDistancia) ? Number.parseFloat(rotaDistancia) : undefined,
            !isEmpty(valorEntregador) ? Number.parseFloat(valorEntregador) : undefined,
            !isEmpty(valorEntrega) ? Number.parseFloat(valorEntrega) : undefined,
        );
        
        entrega.validate();        
        
        return entrega;
    }
}

export default EntregaModel;