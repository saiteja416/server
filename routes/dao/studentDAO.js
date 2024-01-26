var getDBCon = require('../../common/getDBCon')
async function regStudentDAO(data){
 console.log("regStudentDAO")
        var db = await getDBCon();
        var collection= db.collection("students")
        const result= await collection.insertOne(data)
        console.log("doa given the result back to service")
        return result
} 

async function loginDAO(data){
    const {uid, pwd} = data
    var db = await getDBCon();
    var collection=db.collection('students')
    var result = await collection.find({uid, pwd}).toArray()
    return result;

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
    getStudentDAO,
    loginDAO
}