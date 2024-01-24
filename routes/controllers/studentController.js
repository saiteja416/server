var express=require('express');
 var router=express.Router()
 var { regStudentService,getStudentService } = require ('../services/studentService');

// http://localhost:2020/std/reg-std, post
router.post("/reg-std", async function(req,res,next){// req received
   
   try{ const{data}=req.body
    console.log(data)
    console.log("reg-std Controller")
   var result= await regStudentService(data);
   // req received only in controllers
   console.log("controller recieve the result from service and give to client vas response")
   res.send(result)
}
catch(ex){
    console.error(ex)
    res.send(ex.message)
}
// take the data from the req
// conn with DB
// perform required operations
// prepare response
// send res back to client


})

// http://localhost:2020/std/get-std, get (method name)
router.get("/get-std", async function(req,res,next){
    console.log("get-std Controller");
    const result= await getStudentService();
    res.send(result)
})
 module.exports= router;


 