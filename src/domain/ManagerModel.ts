import { ObjectId } from "mongodb";
import Entity from "./Entity";
import { IManager, ISaveManagerParams } from "./ManagerType";

class ManagerModel extends Entity implements IManager {
    constructor(
        public email: string,
        public nome: string,
        public senha: string,
        public celular: string,
    ){
        super();
    }

    static Create({
        email,
        nome,
        senha,
        celular
    }: ISaveManagerParams): IManager {

        const manager = new ManagerModel(
            email,
            nome,
            senha,
            celular
        )

        return manager;
    }    
}

export default ManagerModel;