const { Schema } = require('mongoose')
const MongoContainer = require("../../containers/mongo.container");

const collection = "carts"
const cartSchema = new Schema({
    timestamp: { type: Date, default: new Date().toLocaleString() },
    products: { type: Array, required: true, default: [] }
})


class CartsMongoDao extends MongoContainer {
    constructor(){
        super(collection,cartSchema)
    }
}

module.exports = CartsMongoDao