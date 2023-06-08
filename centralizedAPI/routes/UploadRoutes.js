import express from 'express';
import multer from 'multer';
import IPFSController from '../controllers/IPFSController.js';
import uploadFile from '../middlewares/uploadImageMiddleware.js';

const uploadRoutes = express.Router()

uploadRoutes.use('/upload-nft' , uploadFile.single('image') )

uploadRoutes.post('/upload-nft' , IPFSController.uploadNFT )


export default uploadRoutes