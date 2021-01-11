"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server_1 = __importDefault(require("./server"));
const signale_1 = __importDefault(require("signale"));
new server_1.default()
    .setupApp()
    .then(app => {
    const server = http_1.createServer(app);
    const PORT = 3333;
    function onListing() {
        signale_1.default.complete(`🚀 Server listening on port: ${PORT}`);
    }
    function onError(error) {
        signale_1.default.error('There was an error:', error);
    }
    server.listen(PORT);
    server.on('listening', onListing);
    server.on('error', onError);
})
    .catch(err => {
    signale_1.default.error('Erro ao startar aplicação', err.toString());
});
