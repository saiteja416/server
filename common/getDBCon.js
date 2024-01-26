var mongo=require('mongodb')
async function getDBCon(){
var url= process.env.DB_CONN_URL
     //MongoDB server -DataBase - Collection - document
    var mongoClient= mongo.MongoClient
     var server = await mongoClient.connect(url)
        var db= server.db("school")
        return db;
}

module.exports= getDBCon;