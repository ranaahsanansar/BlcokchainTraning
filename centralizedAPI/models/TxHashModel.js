import mongoose from "mongoose";


const  txHashSchema = new mongoose.Schema({
    hash: {type: String , required: true , trim: true},
    onwer: {type: String , required: true , trim: true},
    contract : {type: String , required: true , trim: true},
    tokenID: {type: Number , trim: true}

});

const TxHashModel = mongoose.model('hash' , txHashSchema);

export default TxHashModel;