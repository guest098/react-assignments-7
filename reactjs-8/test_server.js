const express = require('express')
const app = express()


var bodyParser = require('body-parser');

app.use(express.json());



app.get('/test', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.set( {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",  
  "Access-Control-Allow-methods":"*"});
  data = {
  msg:"welcome"
  };
  res.send(JSON.stringify(data));
})

app.get('/test11', (req, res) => {
  res.send('welcome test')
})

app.post('/addSubscription', (req, res) => {
  console.log("params", req.params);
  console.log("query", req.query);
  console.log("body", req.body);
  res.set( {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",
  "Access-Control-Allow-methods":"*"});
  data = {
  msg:"successfully subscribed"
  };
  res.send(JSON.stringify(data));
})


app.get('/mySubscription', (req, res) => {
  console.log("Loading my subscription");

  res.set( {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",  
  "Access-Control-Allow-methods":"*"});
  data = {
  subscription:{
            name:"Madhu",
            email:"Madhu@gradious.com",
            role:"CXO",
            frequency:"daily",
            termAgrement:false
  }}
  res.send(JSON.stringify(data));
})

var testRouter = express.Router();
app.use("/mytest",testRouter); 

testRouter.post('/test2/:cc', (req, res) => {
  //console.log(req);
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  res.send('welcome')
})

app.listen(3001, () => {
  console.log(`Example app listening on port `)
})

testRouter.post('/test3/:cc', (req, res) => {

  console.log(req.params);
  console.log(req.query);
    console.log(req.body);
  res.send('welcome')
})

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
        
    return next();
  });



