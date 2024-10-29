const MongoClient = require('mongodb').MongoClient
const uri =  process.env.MONGO_CONNECTION_STR || 'mongodb://localhost/tcrud'
exports.client = new MongoClient(uri)

