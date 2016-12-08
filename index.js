const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;

app.listen(port, () =>{
  console.log(`Listening on ${port}`);
})

app.get('/teas', function(req, res){
  knex("Green").then((data) => {
    console.log(data);
    res.json(data);
  })
})

app.get('/teas/:id', function(req, res){

  knex("Green").where('id', req.params.id).first().then(function(result){
    console.log(result);
    res.json(result);
  });

});

app.post('/teas', function(req, res){

  knex("Green").insert({
    name: req.body.name,
    desc: req.body.desc,
    altitude: req.body.altitude

  }, 'id').then(function(result){
    res.json(result);
  });

});

app.put('/teas/:id', function(req, res) {
  knex('Green')
  .where('id', req.params.id)
  .update({
    name: req.body.name,
    desc: req.body.desc,
    altitude: req.body.altitude
  })
  .then(function(result){
    res.json(result);
  })
})

app.delete('/teas/:id', (req, res) => {
  knex('Green')
  .where('id', req.params.id)
  .del()
  .then(function(result) {
    res.json(result);
  })
})
