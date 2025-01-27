const mongoose = require('mongoose');
const validator = require('validator'); //use this npm package to validate before saving in db

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    previousprice: {
        type: Number
    },
    sales: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: true
    },
    flavor: {
        type: String,
        required: false
    },
    discounted: {
    type: Boolean,
    default: false
    },
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now },
    updatedAt: {
        type: Date,
        default: Date.now },
    images: {
        type: [String]
    }
});

module.exports = mongoose.model('Product', productSchema);
