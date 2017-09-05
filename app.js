const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let url = 'mongodb://localhost:27017/vendingmachine';
mongoose.connect(url);
const Vending = require('./models/vending.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())



app.get('/',function(req, res) {
  Vending.find()
  .then(function(results) {
    res.json({status: 'success', 'data': results
  })
})
})

app.post('/api/vendor/items', function(req, res) {
  console.log(req.body);
  const newItem = new Vending({
    description: req.body.description,
    cost: req.body.cost,
    quantity: req.body.quantity
  })
  newItem.save()
   .then(function(results) {
     console.log("saved " + results);
     res.json({status: 'success'})
   })
})

app.put('/api/vendor/items/:itemId', function(req, res) {
  let id = req.params.id

  Vending.updateOne({
      _id: new ObjectId(id)
    }, {
      description: req.body.description,
      cost: req.body.cost,
      quantity: req.body.quantity
    })

    .then(function(results) {
      res.json({status: 'success'})
    })
});
app.listen(3000, function() {
  console.log('Successfully started express appslication!');
});
