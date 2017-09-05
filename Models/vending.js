const mongoose = require('mongoose');

const vendingSchema = new mongoose.Schema({
    description: String,
    cost: { type: Number, required: true},
    quantity: Number

})

const Vending = mongoose.model('Vending', vendingSchema);

module.exports = Vending;
