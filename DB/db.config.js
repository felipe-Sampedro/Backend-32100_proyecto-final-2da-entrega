const envConfig=require('../config')
const firebaseConfig = require('./firebase/firebase.config.json')

module.exports={
    mongodb:{
        uri:`mongodb+srv://felipe182:${envConfig.DB_PASSWORD}@32100backendfsg.4ksy2x1.mongodb.net/?retryWrites=true&w=majority`
    },
    firebase:{
        credentials: firebaseConfig
    }
}