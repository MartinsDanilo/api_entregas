import { ObjectId } from "mongodb";
import Entity from "./Entity";
import {Entrega, SaveEntregaParams} from "./EntregaTypes"


class EntregaModel extends Entity implements Entrega {
    constructor(
        public EnderecoOrigem: string,
        public LatLongOrigem: string,
        public EnderecoDestino: string,
        public LatLongDestino: string,
        public RotaDistancia: string,
        public DistanciaEntregadorEstabelecimentoRadial: string,
        public EstabelecimentoId: ObjectId,
        public entregadorId: ObjectId,
        public aceiteAt: Date,
        public solicitadoAt: Date,
        public chegouLojaAt: Date,
        public associadoAt: Date,
        public saindoLojaAt: Date,
        public saiuLojaAt: Date,
        public chegouClienteAt: Date,
        public FinalizadoAt: Date,
        public valorEntrega: string,
    ){
        super()
    }
    
    static Create ({
        EnderecoOrigem,
        LatLongOrigem,
        EnderecoDestino,
        LatLongDestino,
        RotaDistancia,
        DistanciaEntregadorEstabelecimentoRadial,
        EstabelecimentoId,
        entregadorId,
        aceiteAt,
        solicitadoAt,
        chegouLojaAt,
        associadoAt,
        saindoLojaAt,
        saiuLojaAt,
        chegouClienteAt,
        FinalizadoAt,
        valorEntrega,
    }: SaveEntregaParams): Entrega {
        
        const entrega = new EntregaModel(
            EnderecoOrigem,
            LatLongOrigem,
            EnderecoDestino,
            LatLongDestino,
            RotaDistancia,
            DistanciaEntregadorEstabelecimentoRadial,
            EstabelecimentoId,
            entregadorId,
            aceiteAt,
            solicitadoAt,
            chegouLojaAt,
            associadoAt,
            saindoLojaAt,
            saiuLojaAt,
            chegouClienteAt,
            FinalizadoAt,
            valorEntrega,
        );

        return entrega;
    }
}

export default EntregaModel;