const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title field is required"]
    },
    description: {
        type: String,
        required: [true, "Description field is required"]
    },
    price: {
        type: Number,
        required: [true, "Title field is required"]

    }
},
{timestamps: true}
);

const product = mongoose.model("product", productSchema);
module.exports = product;
