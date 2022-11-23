const app = require('./app');
const envConfig = require('./config');
const PORT  = process.env.PORT || 8080;

const DATASOURCE_BY_ENV = {
    mongo: require('./models/containers/mongo.container'),
    firebase: require('./models/containers/firebase.container'),
    file: require('./models/containers/file.container')
}

const dataSource = DATASOURCE_BY_ENV[envConfig.DATASOURCE]
console.log(envConfig.DATASOURCE);

const connectedServer = app.listen(PORT, ()=>{
    if(envConfig.DATASOURCE === 'mongo' || envConfig.DATASOURCE === 'firebase'){
        dataSource.connect().then(()=>{
        console.log("Ready an running on port", PORT)
        console.log("Connected to" + envConfig.DATASOURCE);
    })}
    console.log("Ready an running on port", PORT)
    console.log("Connected to " + envConfig.DATASOURCE);

})

connectedServer.on('error',(error)=>{
    console.error('Error',error);
})