const express = require('express')
const app = express();
const mongodb = require("mongodb")
const cors = require('cors');   
var MongoClient = require('mongodb').MongoClient;
const  ObjectID = require('mongodb').ObjectID;
const home = require("./routes/home");

const port = process.env.PORT || 3000;
var url = "mongodb+srv://kazuo:22445588@cluster0.7kibo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json())
 app.use(cors())
 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use("/home", home);

 app.listen(port, host,function () {
  console.log('CORS-enabled web server listening on port',port);
})
