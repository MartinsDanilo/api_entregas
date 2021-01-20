import ValidationBuilder from "helpers/ValidationBuilder";
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

    validate(): boolean {
        this.validator.clear()

        this.validator.setValidations([
            ValidationBuilder.field(this.email, 'e-mail').isRequired().isEmail(), 
            ValidationBuilder.field(this.nome, 'Nome').isRequired(), 
            ValidationBuilder.field(this.senha, 'Senha').isRequired(), 
            ValidationBuilder.field(this.celular, 'Celular').isRequired(),       
        ])

        return this.validator.isValid();
    }

    static Create({
        email,
        nome,
        senha,
        celular
    }: ISaveManagerParams): IManager | string[] {

        const manager = new ManagerModel(
            email,
            nome,
            senha,
            celular
        )

        manager.validate();

        return manager;
    }    
}

export default ManagerModel;