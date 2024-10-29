const database =require('../database/database.js')
var ObjectId = require('mongodb').ObjectId;
var connect=database.client.connect()


// GET api/tcrudOne/readOne
exports.get = (req, res, next) => {    
    try {
        let obj = req.query.json
        obj = JSON.parse(obj)
        _id = obj._id
        key= obj.apiKey

    }catch (err) {
          res.status(400).send("Bad Request, please check the docs.")
    }
        
        connect
            .then(() => {
                database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
                if(result && key==result.apiKey){
                    database.client.db(result.database).collection(result.collection).findOne({"_id" : ObjectId(_id)}, (err,resolve) => {
                    /*
                    espera uma request GET
                    https://url/api/tcrudOne/read?json={"apiKey": "557a17195361f57d99d9c6bbab8a177291003d0fb249a330a0027e55fb29402282dc72ecd87113f7690fe503995ff52a529ea12d2a87d7e1874ea7a4a473f01f","_id":"5ea78c91f849f80282a68424"}
                    */
                    res.send(resolve)
                    if(err) throw err
                })
                }else{

                    res.status(404).send("Not Found.")
                }
            
                if(err) throw err
                })
            })  
            .catch((e) =>{res.status(404).send("Not Found.")})
    
}

// POST api/tcrudOne/createOne
exports.post = (req, res, next) => {
     
    try {
        let obj = req.query.json
        obj = JSON.parse(obj)
        _id = obj._id
        data = obj.data
        key= obj.apiKey

    }catch (err) {
        
        res.status(400).send("Bad Request, please check the docs.")
    }
        
        connect
            .then(() => {
                database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
                if(result && key==result.apiKey){
                    database.client.db(result.database).collection(result.collection).insertOne(data)
                                    /*
                    espera uma request POST
                    https://url/api/tcrudOne/create?json={"apiKey": <seu token de acesso>
                                                    "data":'<coloque aqui seu JASON que será inserido no banco.>'
                                                    }
                    ex: /api/tcrudOne/create?json={"data": {"a":4,"b":4},"apiKey": "557a17195361f57d99d9c6bbab8a177291003d0fb249a330a0027e55fb29402282dc72ecd87113f7690fe503995ff52a529ea12d2a87d7e1874ea7a4a473f01f"}
                    */

                    res.status(200).send("OK")
                }else{

                    res.status(404).send("Not Found.")
                }
                if(err) throw err
                })
            })  
            .catch((e) =>{res.status(404).send("Not Found.")})

}


// // PUT api/tcrudOne/UpdateOne
exports.put = (req, res, next) => {

    try {
        let obj = req.query.json
        obj = JSON.parse(obj)
        data = obj.data
        console.log(data)
        key= obj.apiKey
        _id=obj._id
        console.log(_id)

    }catch (err) {
        
        res.status(400).send("Bad Request, please check the docs.")
    }
        
        connect.
            then(() => {
                database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
                if(result && key==result.apiKey){
                    try{
                        database.client.db(result.database).collection(result.collection).replaceOne({"_id" : ObjectId(_id)},data)
                        res.status(200).send("OK")
                    }catch (err) {res.status(401).send("Bad Request, please check the docs.")}
                    /*
                    espera uma request PUT
                    https://url/api/tcrudOne/create?json={"apiKey": <seu token de acesso>
                                                    "data":'<coloque aqui seu JASON que será inserido no banco.>'
                                                    "_id":"5ea78c91f849f80282a68424"
                                                    }
                    ex: /api/tcrudOne/update?jason={"apiKey":"557a17195361f57d99d9c6bbab8a177291003d0fb249a330a0027e55fb29402282dc72ecd87113f7690fe503995ff52a529ea12d2a87d7e1874ea7a4a473f01f","_id":"5ea78c91f849f80282a68424","_id":"5ea78c91f849f80282a68424"}
                    */
                    
                    
                    
                }else{

                    res.status(404).send("Not Found.")
                }
                if(err) throw err
                })
            })  
        .catch((e) =>{res.status(404).send("Not Found.")})
}

// // DELETE api/tcrudOne/deleteOne
exports.delete = (req, res, next) => {
    try {
        let obj = req.query.json
        obj = JSON.parse(obj)
        _id = obj._id
        key= obj.apiKey

    }catch (err) {
          res.status(400).send("Bad Request, please check the docs.")
    }
        
        connect
            .then(() => {
                database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
                if(result && key==result.apiKey){
                    
                    database.client.db(result.database).collection(result.collection).deleteOne({"_id" : ObjectId(_id)})
                    /*
                    espera uma request GET
                    http://localhost:3000/api/tcrudOne/delete?json={"apiKey": "557a17195361f57d99d9c6bbab8a177291003d0fb249a330a0027e55fb29402282dc72ecd87113f7690fe503995ff52a529ea12d2a87d7e1874ea7a4a473f01f","_id": "5eab164f0512520070b907a6"}
                    */
                    res.status(200).send("OK")
                }else{

                    res.status(404).send("Not Found.")
                }
                if (err) {throw e}
                })
            })
        .catch((e) =>{res.status(404).send("Not Found.")})

 }



