var express = require('express');
var router = express.Router();

router.get("/query-params-test", function(req,res,next){
   var{name,loc}=req.query
    res.send(`My name is ${name} I am from ${loc}`)
})
router.get("/path-params-test/:name/:loc", function(req,res,next){
  var{name,loc}=req.params
   res.send(`My name is ${name} I am from ${loc}`)
})
router.put("/headers-test", function(req,res,next){
  var{name,loc}=req.headers
   res.send(`My name is ${name} I am from ${loc}`)
})
router.post("/body-test", function(req,res,next){
  var{name,loc}=req.body
   res.send(`My name is ${name} I am from ${loc}`)
})
module.exports = router;
