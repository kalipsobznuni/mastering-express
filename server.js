const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const formParser =bodyParser.urlencoded({extended:true});
const jsonParser = bodyParser.json();
const fs=require("fs");

app.get('/', (req,res) => {
  res.end(`<script src="clientside.js"></script>`);
});
app.get('/goaway', (req,res) => {
  res.end('<em> Seriously, GO AWAY!</em>');
});
/*app.get('/clientside.js', (_, res)=>{
//  fs.readFile("./clientside.js", "utf8", (err, data)=>{
  //  res.end(data);
  });
});*/
app.use(express.static('.'));

app.post('/login', formParser, jsonParser, (req,res) =>{
  const {username,passwords} = req.body;
  console.log(username);
  if ( username === 'Hades') {
    res.redirect('/goaway');
  }
  else {
  res.end('Welcome Home');
 }
});
//app.(jsonParser) but this way it will be using parser for every single request
//app.use(express.static("public"));
app.listen(8080);
