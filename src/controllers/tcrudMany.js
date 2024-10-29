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
          res.status(401).send("Bad Request, please check the docs.")
    }
        
        connect.then(() => {
            database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
            if(result && key==result.apiKey){
                console.log("here")
                database.client.db(result.database).collection(result.collection).findOne({"_id" : ObjectId(_id)}, (err,resolve) => {
                                /*
                espera uma request GET
                https://url/api/tcrudOne/read?json={"apiKey": <seu token de acesso>
                                                 "_id":"5ea78c5109e67e026c872504"
                                                }
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
        //res.database = client.db('tcrud').collection("pooh")
        res.status(401).send("Bad Request, please check the docs.")
    }
        
        connect.then(() => {
            database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
            if(result && key==result.apiKey){
                database.client.db(result.database).collection(result.collection).insertOne(data)
                                /*
                espera uma request POST
                https://url/api/tcrudOne/create?json={"apiKey": <seu token de acesso>
                                                "data":'<coloque aqui seu JASON que será inserido no banco.>'
                                                "_id":"5ea78c5109e67e026c872504"
                                                }
                ex: /api/tcrudOne/create?json={"data": {"a":4,"b":4},"apiKey": "227a17195361f57d99d9c6bbab8a177291003d0fb249a330a0027e55fb29402282dc72ecd87113f7690fe503995ff52a529ea12d2a87d7e1874ea7a4a473f01f"}
                */

                res.status(200).send("OK")
            }else{

                res.status(404).send("Not Found.")
            }
            if(err) throw err
            })
        })  

}


// // PUT api/tcrudOne/UpdateOne
exports.put = (req, res, next) => {

    try {
        let obj = req.query.json
        obj = JSON.parse(obj)
        data = obj.data
        key= obj.apiKey

    }catch (err) {
        //res.database = client.db('tcrud').collection("pooh")
        res.status(401).send("Bad Request, please check the docs.")
    }
        
        connect.then(() => {
            database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
            if(result && key==result.apiKey){
                database.client.db(result.database).collection(result.collection).updateOne({"_id" : ObjectId(_id)},data)
                                /*
                espera uma request PUT
                https://url/api/tcrud/create?json={"apiKey": <seu token de acesso>
                                                   "data":'<coloque aqui seu JASON que será inserido no banco.>'
                                                   }
                ex: /api/tcrud/create?json={"data": {"a":4,"b":4},"apiKey": "227a17195361f57d99d9c6bbab8a177291003d0fb249a330a0027e55fb29402282dc72ecd87113f7690fe503995ff52a529ea12d2a87d7e1874ea7a4a473f01f"}
                */

                res.status(200).send("OK")
            }else{

                res.status(404).send("Not Found.")
            }
            if(err) throw err
            })
        })  

}

// // DELETE api/tcrudOne/deleteOne
exports.delete = (req, res, next) => {
    try {
        let obj = req.query.json
        obj = JSON.parse(obj)
        _id = obj._id
        key= obj.apiKey

    }catch (err) {
          res.status(401).send("Bad Request, please check the docs.")
    }
        
        connect.then(() => {
            database.client.db('acessControl').collection('api').findOne({"apiKey" : key}, (err, result) => {
            if(result && key==result.apiKey){
                console.log("here")
                database.client.db(result.database).collection(result.collection).deleteOne({"_id" : ObjectId(_id)}, (err,resolve) => {
                                /*
                espera uma request GET
                https://url/api/tcrud/read?json={"apiKey": <seu token de acesso>
                                                 "_id":"5ea78c5109e67e026c872504"
                                                }
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
 }