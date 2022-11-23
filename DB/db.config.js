const envConfig=require('../config')
const firebaseConfig = require('./firebase/firebase.config.json')
const prodsJson = require('./data/products.json');
const cartsJson = require('./data/cart.json');


module.exports={
    file:{
        products: prodsJson,
        carts: cartsJson
    },
    mongodb:{
        uri:`mongodb+srv://felipe182:${envConfig.DB_PASSWORD}@32100backendfsg.4ksy2x1.mongodb.net/?retryWrites=true&w=majority`
    },
    firebase:{
        credentials: firebaseConfig
    }
}