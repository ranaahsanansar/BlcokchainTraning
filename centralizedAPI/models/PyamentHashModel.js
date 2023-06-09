import mongoose from "mongoose";

const  pyamentHashSchema = new mongoose.Schema({
    hash: {type: String , unique: true ,   required: true , trim: true},
});

const PyamentHashModel = mongoose.model('paymenthash' , pyamentHashSchema);

export default PyamentHashModel;