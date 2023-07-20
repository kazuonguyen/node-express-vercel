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
module.exports = router;
