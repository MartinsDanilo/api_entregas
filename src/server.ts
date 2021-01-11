/* eslint-disable no-param-reassign */
import express, { Application } from 'express';
import bodyParser from 'body-parser';

export default class Server {

    app: Application;

    constructor() {
        this.app = express();
    }


    private configureMiddleware(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    async setupApp(): Promise<Application> {
        this.configureMiddleware();
        return this.app;
    }
}
