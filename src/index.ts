/* eslint-disable no-param-reassign */
import { createServer } from 'http';
import Server from './server';
import signale from 'signale';

/*Teste*/
import EntregadorModel from "./domain/EntregadorModel"
import EntregaModel from "./domain/EntregaModel";
import Estabelecimento from "./domain/EstabelecimentoModel"

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
            } = req.body;

            const entregador = EntregadorModel.create({
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
            })

            debugger;

            console.log(entregador)
            res.json(entregador)
        })
        app.post("/entrega", (req, res) => {
            const {
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
            } = req.body;

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
            )
            console.log(entrega)
            res.json(entrega)
        }) 
        app.post("/estabelecimento", (req, res) => {
            const {
                nomeExibicao,
                cnpj,
                cpf,
                endereco,
                enderecosRetirada,
                localizacao,
                municipioId,
                valorEntregaBase,
                valorKmAdicional,
                entregaBaseMts,
                requiredNearPlaceToConfirmStartRide,
                requiredNearClientToConfirm,
                requiredNearplaceToConfirmReturnRide,
                needCheckToConfirmReturnRide,
                qtdMaxEntregaGroup,
                maxDistanceDropsToGroup,
                qlBankAccountId,
            } = req.body;

            const estabelecimento = Estabelecimento.Create({
                nomeExibicao,
                cnpj,
                cpf,
                endereco,
                enderecosRetirada,
                localizacao,
                municipioId,
                valorEntregaBase,
                valorKmAdicional,
                entregaBaseMts,
                requiredNearPlaceToConfirmStartRide,
                requiredNearClientToConfirm,
                requiredNearplaceToConfirmReturnRide,
                needCheckToConfirmReturnRide,
                qtdMaxEntregaGroup,
                maxDistanceDropsToGroup,
                qlBankAccountId
            })

            return res.send(estabelecimento)

        })       
    }    
    )
    .catch(err => {
        signale.error('Erro ao startar aplicação', err.toString());
    });
