/* eslint-disable no-param-reassign */
import { createServer } from 'http';
import Server from './server';
import signale from 'signale';

/*Teste*/
import entregadorModel from "./domain/EntregadorModel"

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

        app.post("/", (req, res)=>{

            const {MunicipioId,
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
                qlBankAccountId} = req.body;

            const entregador = entregadorModel.create({
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
    })
    .catch(err => {
        signale.error('Erro ao startar aplicação', err.toString());
    });
