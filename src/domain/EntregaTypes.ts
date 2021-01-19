import { ObjectId } from "mongodb";
import {ILocalizacao, IEndereco} from "./CommonTypes";

export type TStatusEntrega =
    | 'PENDENTE'
    | 'ACEITO'
    | 'CHEGOU_NA_LOJA'
    | 'ASSOCIADO'
    | 'SAINDO_DA_LOJA'
    | 'SAIU_DA_LOJA'
    | 'CHEGOU_NO_CLIENTE'
    | 'FINALIZADO';
    

export type TFormaPagamento =  'DEBITO' | 'CREDITO' | 'DINHEIRO';

export interface IEntrega  {
    _id?: ObjectId;
    enderecoOrigem: IEndereco;
    localizacaoOrigem: ILocalizacao;
    enderecoDestino: IEndereco;
    localizacaoDestino: ILocalizacao;
    valorEntrega?: number;
    rotaDistancia?: number;    
    estabelecimentoId: ObjectId;       
    formaPagamento: TFormaPagamento;
    nomeDestinatario: string;
    telefoneDestinatario: string;										
    status: TStatusEntrega;
    valorEntregador?: number;
    solicitadoAt: Date;
    troco?: number;
    distanciaEntregadorEstabelecimentoRadial?: number;
    entregadorId?: ObjectId;    
    aceiteAt?: Date;
    cancelamentoAt?: Date;
    horaPriorizacaoAt?: Date;
    saidaClienteAt?: Date;
    retornoLojaAt?: Date;       
    chegouLojaAt?: Date;
    associadoAt?: Date;
    saindoLojaAt?: Date;
    saiuLojaAt?: Date;
    chegouClienteAt?: Date;
    finalizadoAt?: Date;
}

export interface ISaveEntregaParams {
    enderecoOrigem: IEndereco;
    localizacaoOrigem: ILocalizacao;
    enderecoDestino: IEndereco;
    localizacaoDestino: ILocalizacao;
    valorEntrega: string;
    rotaDistancia: string;    
    estabelecimentoId: ObjectId;       
    formaPagamento: TFormaPagamento;
    nomeDestinatario: string;
    telefoneDestinatario: string;										
    status: TStatusEntrega;
    valorEntregador: string;
    solicitadoAt: Date;
    troco?: string;
    distanciaEntregadorEstabelecimentoRadial?: number;
    entregadorId?: ObjectId;    
    aceiteAt?: Date;
    cancelamentoAt?: Date;
    horaPriorizacaoAt?: Date;
    saidaClienteAt?: Date;
    retornoLojaAt?: Date;       
    chegouLojaAt?: Date;
    associadoAt?: Date;
    saindoLojaAt?: Date;
    saiuLojaAt?: Date;
    chegouClienteAt?: Date;
    finalizadoAt?: Date;
}

//alteracoes ate aqui