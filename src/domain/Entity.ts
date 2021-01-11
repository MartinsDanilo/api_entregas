import { ObjectId } from "mongodb";

console.log("Entity")
class Entity {
  _id: ObjectId;

  constructor() {
    this._id = new ObjectId();
  }
}

export default Entity;
