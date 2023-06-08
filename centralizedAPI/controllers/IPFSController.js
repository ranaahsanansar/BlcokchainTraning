import FormData from 'form-data';
import axios from 'axios';
import uploadFile from '../middlewares/uploadImageMiddleware.js';
import fs from 'fs';
import ERC720Controller from './ERC720Controller.js';

const uploadFileToIPFS = async (fileName) => {
  try {
    const filePath = `public/uploads/image/${fileName}`
    const actualImage = fs.readFileSync(filePath);

    const formData = new FormData();
    formData.append('file', actualImage, { filename: fileName });


    const response = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        'Content-Type': "multipart/form-data",
        'pinata_api_key': process.env.PINATA_API_KEY,
        'pinata_secret_api_key': process.env.PINATA_SECRET_KEY,
      }
    })

    // 2508bf8304a38757faf4029bdcf0f44f426af52e65b34a863dfd332fb9b3509a

    // 396403224181752892e7

    return response.data.IpfsHash;
  } catch (error) {
    console.log("Errro on Upload Image")
    console.log(error)
    return false;
  }
};

const uploadMetaDataToIPFS = async (data) => {
  try{

    const formData = new FormData();

    const jsonData = JSON.stringify(data);

    // console.log(data)
    formData.append('file', jsonData, { filename: `metadata-${Date.now().toString()}.json`});

    // console.log(formData)

    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        pinata_api_key:  process.env.PINATA_API_KEY,
        pinata_secret_api_key:  process.env.PINATA_SECRET_KEY,
      },
    });

    return response.data.IpfsHash;


  }catch(err){
    console.log("Errro on Upload MetaData")
    console.log(err);
    return false;
  }
}

class IPFSController {
  static uploadNFT = async (req, res) => {
    try {
      // if(!req.image){
      //     res.status(202).send({ "status": "failed", "message": "No File!" })
      // }

      // const { originalname, buffer } = req.image;
      // console.log("Before UploadFileTPFS")
      const { name, description, image, wallet, attributes } = req.body;
      // console.log(req.file.filename)

      const imgName = req.file.filename;

      const ipfsHash = await uploadFileToIPFS(imgName);
      // console.log("After UploadFileTPFS")

      let imageUrl = `https://gray-multiple-skunk-513.mypinata.cloud/ipfs/${ipfsHash}`

      const metaData = req.body;

      metaData.image = imageUrl;
      metaData.attributes = JSON.parse(req.body.attributes);

      const metaDataHash = await uploadMetaDataToIPFS(metaData);

      const metaDataURL = `https://gray-multiple-skunk-513.mypinata.cloud/ipfs/${metaDataHash}`
      // console.log("Metadata Hash" + metaDataHash)

      // console.log("Meta Data");
      // console.log(metaData)

      const txHashResult = await ERC720Controller.mintNFT(wallet , metaDataURL);

      res.status(202).send({ "status": "success", "message": "Confirmed", "ImageHash": ipfsHash, "ImageURL": imageUrl , "metaDataHash": metaDataURL , "txResult": txHashResult })

    } catch (err) {
      console.log('Error in Upload NFT')
      console.log(err)
      res.status(202).send({ "status": "failed", "message": "Genrate Hash Error", "error": err })
    }
  }
}

export default IPFSController;



// 0x1d29d93ea2c4c51a2dfe438df379e755e4e0353f6a138a356f2659c7739ae629


// 0x60f653df4c76367564dd89478deaf9d6f333355f5214966d3ef13ea89cac2409