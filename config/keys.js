module.exports={
  mongoURI:
    //  `mongodb+srv://ShivaniB:${encodeURIComponent('password$123')}@devconnector1-hq2eo
    //  .azure.mongodb.net/test?retryWrites=true`
   `mongodb://ShivaniB:${encodeURIComponent('password$123')}@devconnector1-shard-00-00-hq2eo.azure.mongodb.net:27017,
    devconnector1-shard-00-01-hq2eo.azure.mongodb.net:27017,
   devconnector1-shard-00-02-hq2eo.azure.mongodb.net:27017/KalAcademy?ssl=true&replicaSet=DevConnector1-shard-0&authSource=admin`

}

// 'mongodb+srv://ShivaniB:password%24123@devconnector1-hq2eo.azure.mongodb.net/test?retryWrites=true'