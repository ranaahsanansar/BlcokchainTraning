import mongoose from "mongoose";


const  marketPlaceSchema = new mongoose.Schema({
    tokenId: {type:Number , required:true , trim:true},
    price: {type:String , required:true , trim:true},
    seller: {type:String , required:true , trim:true},
    metadata: {
        name: {type: String , required: true , trim: true},
        description: {type: String , required: true , trim: true},
        image: {type: String , required: true , trim: true},
        attributes: {type: Object , required: true , trim: true}
     }

});

const MarketPlaceModel = mongoose.model('market' , marketPlaceSchema);

export default MarketPlaceModel;