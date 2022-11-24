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
        uri: `mongodb+srv://coderhouse:${envConfig.DB_PASSWORD}@cluster0.zhv02a9.mongodb.net/?retryWrites=true&w=majority`
    
    },
    firebase:{
        credentials: firebaseConfig
    }
}