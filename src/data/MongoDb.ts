import { Db, MongoClient } from 'mongodb';
import signale from 'signale';

let dbInstance: Db;

class MongoDb {
    async connect(): Promise<Db> {
        signale.info('conectando ao MongoDb...');
        const mongodbUrl =
            process.env.MONGODB_URL || 'ENV VAR MONGODB_URL IS NOT DEFINED';
        signale.info(`MONGODB_URL: ${mongodbUrl}`);

        const mongoClient = await MongoClient.connect(mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        signale.info(
            `MONGODB_DATABASE ${process.env.MONGODB_DATABASE || 'UNDEFINED'}`,
        );
        const db = mongoClient.db(process.env.MONGODB_DATABASE);

        signale.info('conectado ao mongoDb');

        db.on('error', (error: any) => {
            signale.error(error);
        });

        return db;
    }

    static async getDb(): Promise<Db> {
        if (dbInstance) {
            return dbInstance;
        }
        const db = await new MongoDb().connect();
        dbInstance = db;
        return db;
    }
}

export const collections = {
    admin: 'admin',
    configuracao: 'configuracao',
    usuario: 'usuario',
    analytics: 'analytics',

    campanha: 'campanha',
    resposta: 'resposta',
};

export default MongoDb;
