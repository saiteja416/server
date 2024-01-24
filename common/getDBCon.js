var mongo=require('mongodb')
async function getDBCon(){
var url="mongodb+srv://u1:p1@data.znsreru.mongodb.net/"
     //MongoDB server -DataBase - Collection - document
    var mongoClient= mongo.MongoClient
     var server = await mongoClient.connect(url)
        var db= server.db("school")
        return db;
}

module.exports= getDBCon;