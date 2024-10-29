const database =require('../database/database.js')
var ObjectId = require('mongodb').ObjectId;
var connect=database.client.connect()


// GET api
exports.get = (req, res, next) => {   
    
    /*
    espera uma request GET
    https://url/api?json={"apiKey": "557a17195361f57d99d9c6bbab8a177291003d0fb249a330a0027e55fb29402282dc72ecd87113f7690fe503995ff52a529ea12d2a87d7e1874ea7a4a473f01f","view":"gmoc/dash"}
    */
    try {
        let obj = req.query.json
        obj = JSON.parse(obj)
        key= obj.apiKey

    }catch (err) {
          res.status(400).send("Bad Request, please check the docs.")
    }
        
        connect
            .then(() => {
                database.client.db('acessControl').collection('api').findOne(
                    {
                        $and: [
                            {"apiKey" : key},
                            {"route" : obj.view}
                        ]
                     }, (err, result) => {
                        if(err) {
                            throw err
                            res.status(400).send("Bad Request, please check the docs.")
                        }

                        if(result && key==result.apiKey){
                        res.send(result.html)
                        
                        }else{
                        res.status(404).send("Not Found.")
                    }
                        
                })
            })  
            .catch((e) =>{res.status(400).send("Bad Request, please check the docs.")})
    
}