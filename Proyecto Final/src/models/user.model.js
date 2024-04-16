const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const userCollection = 'user';


const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true, 
        index: true
    },
    password: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

userSchema.plugin(mongoosePaginate);
const UserModel = mongoose.model(userCollection, userSchema);

module.exports = UserModel;