var jwt= require('jsonwebtoken')
var {regStudentDAO,getStudentDAO,loginDAO, updateStudentDAO,deleteStudentDAO,getStdByIdStudentDAO} = require("../dao/studentDAO")

async function regStudentService(data){
    console.log("regStudentService")
     var result =  await regStudentDAO(data);
     console.log("service recieve the result from dao and send to the controller")
     return result;
}

async function loginService(data){
const result =  await loginDAO(data)
   if(result.length){
       var token = jwt.sign(data,"appToken")
      delete result[0].pwd;
      result[0].token=token
}
else{

}
   return result;
}

async function getStudentService(){
   console.log("getStudentService")
   var result= await getStudentDAO();
  result = result.map((obj)=>{
        delete obj.pwd
        return obj;
   })
   return result;
}

async function updateStudentService(id,data){
  var result= await updateStudentDAO(id,data)
  return result;
}

async function deleteStudentService(id){
   var result= await deleteStudentDAO(id)
   return result;
}

async function getStdByIdStudentService(id){
   var result= await getStdByIdStudentDAO(id)
   return result;
}
module.exports={regStudentService,
               getStudentService,
               loginService,
               updateStudentService,
               deleteStudentService,
               getStdByIdStudentService
 }