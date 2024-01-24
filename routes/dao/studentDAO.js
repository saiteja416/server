var getDBCon = require('../../common/getDBCon')
async function regStudentDAO(data){
 console.log("regStudentDAO")
        var db = await getDBCon();
        var collection= db.collection("students")
        const result= await collection.insertOne(data)
        console.log("doa given the result back to service")
        return result
} 

async function getStudentDAO(){
    console.log("getStudentDAO")
    var db = await getDBCon();
        var collection= db.collection("students")
               const result= await collection.find().toArray()
               return result;
}

module.exports={
    regStudentDAO,
    getStudentDAO
}