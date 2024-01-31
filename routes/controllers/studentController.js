var express=require('express');
 var router=express.Router()
 var validateToken= require('../../common/validateToken')

 var { regStudentService,getStudentService,loginService,updateStudentService,deleteStudentService,getStdByIdStudentService } = require ('../services/studentService');

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

router.post("/login", async function(req,res,next){
    try{
    const {data}=req.body
   const result = await loginService(data);
   res.send(result)
    } 
    catch(exe){
        console.error("login",exe)
        res.send(exe.message)
    }      
})

// http://localhost:2020/std/get-std, get (method name)
router.get("/get-std", 
     validateToken,
 async function(req,res,next){
    try{
    console.log("get-std Controller");
    const result= await getStudentService();
    res.send(result)
    }
    catch(exe){
        console.error("get-std",exe)
        res.send(exe.message)
    } 
})

router.put("/update-std",
 validateToken,
async function(req,res,next){
    try{
    var {id}=req.query
    var{data}=req.body
 var result =  await updateStudentService(id,data)
  res.send(result)
    }
    catch(exe){
        console.error("update-std",exe)
        res.send(exe.message)
    } 
    
})

router.delete("/delete-std/:id",
    validateToken,
  async  function(req,res,next){
    try{  
    var {id}=req.params
     var result=await deleteStudentService(id)
     res.send(result)
    }
    catch(exe){
        console.error("delete-std",exe)
        res.send(exe.message)
    } 
    })

 router.get("/get-std-by-id", 
    validateToken,
    async function(req,res,next){
   try{
        var{id}=req.query
   var result =   await  getStdByIdStudentService(id)
   res.send(result)
   }
   catch(exe){
    console.error("get-std-by-id",exe)
    res.send(exe.message)
} 
    })
 module.exports= router;


 