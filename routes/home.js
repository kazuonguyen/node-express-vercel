const express = require("express");
const router = express.Router();
const mongodb = require("mongodb")
var MongoClient = require('mongodb').MongoClient;
const  ObjectID = require('mongodb').ObjectID;

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});
router.get('/qq',(req,res)=>{
    res.send('cc world');
})
router.get('/api/getbooks',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) console.log(err);
        else{   
            var dbo = db.db("test");
            dbo.collection("books").find({}).toArray(function(err,result){
                if(err) console.log(err);
                else{
                    res.json(result);
                    db.close();
                }
            })
        }
    })
})
router.post('/api/category',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) console.log(err);
        else{
            var dbo = db.db("test");
            let myObj = req.body.category;
            dbo.collection("books").find({category:myObj}).toArray(function(err,ress){
                if(err) console.log(err);
                else{
                    res.json(ress);
                    db.close();
                }
            })
        }
    })
})
router.post('/api/addbooks',(req,res)=>{
    MongoClient.connect(url, function(err,db){
        if(err) console.log(err);
        else{
            var dbo = db.db("test");
            let myObj = req.body;
            dbo.collection("books").insertOne(myObj, function(err, result){
                if(err) console.log(err);
                else{
                    res.json("success");
                    db.close();
                }
            })
        }
    })
})
router.post('/api/deletebook',(req,res)=>{
    MongoClient.connect(url, function(err, db){
        if(err) console.log(err)
        var dbo = db.db("test");
        let myObj = req.body.id;
        if(myObj.toString().length!=24) res.json(myObj)
        else{
        dbo.collection("books").deleteOne({_id: new mongodb.ObjectID(myObj.trim())},function(err, ress){
            if (err) console.log(err)
           else{ console.log("success");
            res.json("successful");
            db.close();
        }
        });
    }
    })
})
router.get('/api/helloworld', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) console.log(err)
      else{  var dbo = db.db("test");
        dbo.collection("users").find({}).toArray(function(err, result){
            if (err) console.log(err)
            else if(result===null||!result){
                res.json("unknow");
            }
           else{ 
            res.json(result)
      
            db.close();
        }
        })
    }
      });
  })
router.post('/api/user',async (req,res)=>{
    console.log(req.body)
  await  MongoClient.connect(url, function(err, db){
        if(err) console.log(err)
       else  var dbo = db.db("test");
        let myObj = req.body;
        dbo.collection("users").insertOne(myObj, function(err, ress){
            if(err) console.log(err)
            console.log("success");
            res.json("successfull");
            db.close();
        })
    })
    

})
router.post('/api/delete',(req,res)=>{
    MongoClient.connect(url, function(err, db){
        if(err) console.log(err)
        var dbo = db.db("test");
        let myObj = req.body.name;
        if(myObj.toString().length!=24) res.json(myObj)
        else{
        dbo.collection("users").deleteOne({_id: new mongodb.ObjectID(myObj.trim())},function(err, ress){
            if (err) console.log(err)
           else{ console.log("success");
            res.json("successful");
            db.close();
        }
        });
    }
    })
})
module.exports = router;
