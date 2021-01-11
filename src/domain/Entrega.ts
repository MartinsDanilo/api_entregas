import { ObjectId } from "mongodb";

class Entrega {
    
    EndereçoOrigem: string;
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