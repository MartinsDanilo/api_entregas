import { Db, IndexOptions } from 'mongodb';
import signale from 'signale';

const locale = 'pt';

const defaultCollation = {
    locale,
    strength: 2,
};

const collections: Record<string, CollectionKey> = {
    COLLECTION_EX: {
        options: {
            collation: defaultCollation,
        },
        indexes: [
            {
                key: {
                    createdAt: -1,
                },
            },
        ],
    },
};

type CollectionKey = {
    options: OptionType;
    indexes: IndexArrayType[];
};

type OptionType = {
    collation: CollationType;
};

type CollationType = {
    locale: string;
    strength: number;
};

type IndexArrayType = {
    key: IndexKeyType;
};

type IndexKeyType = {
    createdAt: number;
};

const config = async (
    db: Db,
): Promise<{ client: Db; output: Array<string> }> => {
    const output = [];

    try {
        signale.info('Configurando MongoDb');
        output.push('Configurando MongoDb');

        signale.info('Criando indices');
        output.push('Criando indices');

        await Promise.all(
            Object.keys(collections).map(
                async (key: string): Promise<any> => {
                    const collectionConfig: any = collections[key];
                    db.createCollection(key, collectionConfig.options);

                    await Promise.all(
                        collectionConfig.indexes.map(
                            async (index: {
                                key: any;
                                options: IndexOptions;
                            }) => {
                                await db
                                    .collection(key)
                                    .createIndex(index.key, {
                                        ...index.options,
                                        background: true,
                                    });
                            },
                        ),
                    );
                },
            ),
        );

        signale.info('Indices criados');
        output.push('Indices criados');

        signale.info('MongoDb configurado');
        output.push('MongoDb configurado');
    } catch (ex) {
        signale.error('Erro ao criar indices');
        output.push('Erro ao criar indices');
        signale.warn(ex);
        // await removerIndices(db, output);
        // if (!error) {
        //     const result = await config(db);
        //     error = true;
        //     return result
        // }
    }

    return {
        client: db,
        output,
    };
};

export default config;
