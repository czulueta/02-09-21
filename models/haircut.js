const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cutSchema = new Schema({
    haircutStyle: {
        type: String,
    },
    haircutTime: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Cut", cutSchema)

