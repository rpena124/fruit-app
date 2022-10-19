const mongoose = require('mongoose')

//make a schema (Schema tells us what we cannot do)
const fruitSchema = new mongoose.Schema({
    name:{type: String, required:true},
    color:{type:String, required:true},
    readyToEat : Boolean
});

//make a model from the schema ( methods we can use, allows us to do all the CRUD capabilities to items inside a collectoin )
const Fruit = mongoose.model('Fruit',fruitSchema)

//Export the model for use in The App
module.exports = Fruit