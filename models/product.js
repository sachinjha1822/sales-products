const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 1
    },
    category: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
