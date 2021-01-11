import { ObjectId } from "mongodb";
export type TStatusEntrega = "PENDENTE" | "ACEITO" | "CHEGOU_NA_LOJA" | "ASSOCIADO" | "SAINDO_DA_LOJA" | "SAIU_DA_LOJA" | "CHEGOU_NO_CLIENTE" | "FINALIZADO";

export type Entrega = {
    _id: ObjectId;
    EnderecoOrigem: string;
    LatLongOrigem: string;
    EnderecoDestino: string;
    LatLongDestino: string;
    RotaDistancia: string;
    DistanciaEntregadorEstabelecimentoRadial: string
    EstabelecimentoId: ObjectId;
    entregadorId: ObjectId;
    aceiteAt: Date;
    solicitadoAt: Date;
    chegouLojaAt: Date;
    associadoAt: Date;
    saindoLojaAt: Date;
    saiuLojaAt: Date;
    chegouClienteAt: Date;
    FinalizadoAt: Date;
    valorEntrega: string;
}

export type SaveEntregaParams = {
    EnderecoOrigem: string;
    LatLongOrigem: string;
    EnderecoDestino: string;
    LatLongDestino: string;
    RotaDistancia: string;
    DistanciaEntregadorEstabelecimentoRadial: string
    EstabelecimentoId: ObjectId;
    entregadorId: ObjectId;
    aceiteAt: Date;
    solicitadoAt: Date;
    chegouLojaAt: Date;
    associadoAt: Date;
    saindoLojaAt: Date;
    saiuLojaAt: Date;
    chegouClienteAt: Date;
    FinalizadoAt: Date;
    valorEntrega: string;
}