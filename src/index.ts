/* eslint-disable no-param-reassign */
import { createServer } from 'http';
import Server from './server';
import signale from 'signale';

/*Teste*/
import EntregadorModel from "./domain/EntregadorModel";
import EntregaModel from "./domain/EntregaModel";
import Estabelecimento from "./domain/EstabelecimentoModel";
import MunicipioModel from './domain/MunicipioModel';
import CorridaModel from "./domain/CorridaModel";
import ManagerModel from "./domain/ManagerModel";


new Server()
    .setupApp()
    .then(app => {
        const server = createServer(app);

        const PORT =  3333;

        function onListing() {
            signale.complete(`🚀 Server listening on port: ${PORT}`);
        }

        function onError(error: string) {
            signale.error('There was an error:', error);
        }

        server.listen(PORT);
        server.on('listening', onListing);
        server.on('error', onError);

        app.post("/entregador", (req, res)=>{

            const {
                municipioId,
                codigo,
                nome,
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
            } = req.body;

            const entregador = EntregadorModel.create({
                municipioId,
                codigo,
                nome,
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
            })

            debugger;

            console.log(entregador)
            res.json(entregador)
        })
        app.post("/entrega", (req, res) => {
            debugger
            const {
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
            } = req.body;

            debugger

            const entrega = EntregaModel.Create({
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
            })
            console.log(entrega)
            res.json(entrega)
        }) 
        app.post("/estabelecimento", (req, res) => {
            const {
                nomeExibicao,
                cnpj,
                cpf,
                endereco,                
                localizacao,
                municipioId,
            } = req.body;

            const estabelecimento = Estabelecimento.Create({
                nomeExibicao,
                cnpj,
                cpf,
                endereco,                
                localizacao,
                municipioId
            })

            console.log(estabelecimento)
            return res.send(estabelecimento)

        })
        
        app.post("/municipio", (req, res) => {
            const {
                nome,
                UF,
                localizacao,
                entregaBaseMts,
                raioMaxDistance,
                valorKmAdicional,
                valorEntregaBase
            } = req.body;

            const municipio = MunicipioModel.Create({
                nome,
                UF,
                localizacao,
                entregaBaseMts,
                raioMaxDistance,
                valorKmAdicional,
                valorEntregaBase
            })

            return res.send(municipio);
        })

        app.post("/corrida", (req, res) => {
            const {
                entregadorId,
                estabelecimentoIds,
                entregaIds,
                statusCorrida,
                municipioId
            } = req.body;

            const corrida = CorridaModel.Create({
                entregadorId,
                estabelecimentoIds,
                entregaIds,
                statusCorrida,
                municipioId
            })        

            return res.send(corrida);
        })        

        app.post("/manager", (req, res) => {
            const {
                email,
                nome,
                senha,
                celular
            } = req.body;

            const manager = ManagerModel.Create({
                email,
                nome,
                senha,
                celular
            });

            return res.send(manager)
        })
        
    }    
    )
    .catch(err => {
        signale.error('Erro ao startar aplicação', err.toString());
    });
