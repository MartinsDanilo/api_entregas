import ValidationContract from '../helpers/ValidationContract';
import { ObjectId } from "mongodb";

console.log("Entity")
class Entity {
  _id: ObjectId;
  validator: ValidationContract;

  constructor() {
    this._id = new ObjectId();
    this.validator = new ValidationContract();
  }
}

export default Entity;
