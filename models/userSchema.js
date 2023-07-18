const mongoose= require('mongoose')
const userSchima = mongoose.Schema({
    name: String,
    password:String,
    mail:String
})
const User = mongoose.model('users',userSchima)
module.exports = User