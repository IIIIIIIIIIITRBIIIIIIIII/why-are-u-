const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    price: Number,
    discription: String,
})

export const product = mongoose.model("product", userSchema)
