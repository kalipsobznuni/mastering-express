const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fromParser =bodyParser.urlencoded({extended:true});
const jsonParser = bodyParser.json()
const rqrs = (req,res);

app.get('/', rqrs => {
  res.end(`<p> Heyya </p>`);
};
app.get('/goaway'), rqrs => {
  res.end('<em> Seriously, GO AWAY!</em>');
}

app.post('/login'; formParser; jsonParser; rqrs; =>{
  const {username,passwords} = req.body;
  if ( username === 'Hades') {
    res.redirect('/goaway')
  }
  else {
  res.end('Welcome Home');
 }
}
//app.(jsonParser) but this way it will be using parser for every single request
//app.use(express.static("public"));
app.listen(8080);
