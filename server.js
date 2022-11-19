const app = require('./app');
const envConfig = require('./config');
const PORT  = process.env.PORT || 8080;

const DATASOURCE_BY_ENV = {
    mongo: require('./model/containers/mongo.container'),
    firebase: require('./model/containers/firebase.container'),
    file: require('./model/containers/file.container')
}

const dataSource = DATASOURCE_BY_ENV[envConfig.DATASOURCE]

const connectedServer = app.listen(PORT, ()=>{
    dataSource.connect().then(()=>{
        console.log("Ready an running on port", PORT)
        console.log("Connected to" + envConfig.DATASOURCE);
    })
})

connectedServer.on('error',(error)=>{
    console.error('Error',error);
})