import  express  from "express";
import MarketPlaceController from "../controllers/MarketPlaceController.js";

const Marketrouter = express.Router();

Marketrouter.post('/list'  , MarketPlaceController.listNFT)
Marketrouter.get('/get-all'  , MarketPlaceController.getAllNFT)
Marketrouter.get('/nftdetails/:id'  , MarketPlaceController.nftDetails)

export default Marketrouter;