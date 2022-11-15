const app = require('./app');
const envConfig = require('./config');

const PORT  = process.env.PORT || 8080;

const ASYNC_DATASURCE ={
  mongo: require('./models/containers/mongo.container'),
}


const connectedServer = app.listen(PORT, ()=>{
    console.log("Ready an running on port", PORT)
})

connectedServer.on('error',(error)=>{
    console.error('Error',error);
})