import { ObjectId } from "mongodb";

type TStatusEntrega = "PENDENTE" | "ACEITO" | "CHEGOU_NA_LOJA" | "ASSOCIADO" | "SAINDO_DA_LOJA" | "SAIU_DA_LOJA" | "CHEGOU_NO_CLIENTE" | "FINALIZADO";

class Entrega {
    
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
    
    static Create (): Entrega {
        const entrega = new Entrega();


        return entrega;
    }
}