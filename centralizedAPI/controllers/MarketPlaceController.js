const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

import { ethers } from "ethers";
import axios from 'axios';
// import MarketPlaceModel from "../models/MarketModel.js";

import PyamentHashModel from "../models/PyamentHashModel.js";
import ERC720Controller from "./ERC720Controller.js";
import MarketPlaceModel from "../models/MarketModel.js";

class MarketPlaceController {
    static listNFT = async (req, res) => {
        const { tokenId, price, transfer_hash, wallet, contractAddress } = req.body;
        console.log(req.body)
        try {
            let sellerWallet = wallet.toUpperCase();
            let escroWallet = process.env.ESCROW_Wallet_Address;

            const provider = new ethers.providers.JsonRpcBatchProvider(process.env.MUMBAI_URL)

            const transaction = await provider.getTransaction(transfer_hash)

            console.log(transaction)

            if (transaction.from.toUpperCase() == sellerWallet) {
                const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_URL);
                const nftContractData = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, provider);

                const owner = await nftContractData.ownerOf(parseInt(tokenId));

                const tokenURI = await nftContractData.tokenURI(tokenId);

                // axios.get(tokenURI)
                //     .then((response) => {
                //         const jsonData = response.data;
                //         // Use the jsonData as needed in your code
                //         console.log(jsonData);
                //     })
                //     .catch((error) => {
                //         console.error('Error retrieving JSON file from Pinata:', error);
                //     });

                if (owner == process.env.ESCROW_Wallet_Address) {
                    try {

                        const response = await axios.get(tokenURI);
                        const metaData = response.data
                        console.log("Meta Data")
                        console.log(metaData)
                        const doc = {
                            "tokenId": tokenId,
                            "price": price,
                            "seller": metaData.wallet,
                            "metadata": {
                                "name": metaData.name,
                                "description": metaData.description,
                                "image": metaData.image,
                                "attributes": metaData.attributes
                            }
                        }

                        const modelDocumnet = new MarketPlaceModel(doc);

                        await modelDocumnet.save();

                        res.status(200).send({
                            "status": "success",
                            "message": "NFT listed successfully",
                        })

                    } catch (err) {
                        console.log("Error In fetching Meta Data From IPFS")
                        res.status(404).send({
                            "status": "error",
                            "message": "Saving in Data Base and Fetching",
                        })
                    }
                } else {
                    res.status(404).send({
                        "status": "error",
                        "message": "Unknown Owner",
                    })
                }
            }

        } catch (err) {
            console.log("Listing NFT Error");
            console.log(err)
            res.send({
                "status": "error",
                "message": "Not Listed",
            })
        }



    }

    static getAllNFT = async (req, res) => {
        try {
            const getAll = await MarketPlaceModel.find();

            console.log(getAll)
            res.status(200).send({
                "status": "success",
                "message": "Listed NFTs retrieved successfully",
                "nfts": getAll
            })

        } catch (err) {
            console.log("Error")
            res.send({
                "status": "error",
                "message": "Fetching from DB Error",
            })
            console.log(err)
        }
    }

    static nftDetails = async (req, res) => {
        try {
            const { id } = req.params
            console.log(id)
            const nftDetails = await MarketPlaceModel.findById(id);

            res.status(200).send({
                "status": "success",
                "message": "NFT details retrieved successfully",
                "nft": nftDetails
            })

        } catch (err) {
            console.log("Fetching Error ")
            console.log(err)
            res.status(404).send({
                "status": "error",
                "message": "Fetchinf Error"
            })
        }
    }

    // getListedTokenDetails(_tokenId) {
    //     const tokenDetails = MarketPlaceModel.find({tokenId: _tokenId});
    //     return tokenDetails;
    // }

    static buyNft = async (req, res) => {
        const { nftId, buyer, paymentHash } = req.body;
        console.log(buyer)

        try {
            // const nftDetail = await MarketPlaceModel.find({ tokenId: nftId });

            let buyerWallet = buyer.toUpperCase();
            let escroWallet = process.env.ESCROW_Wallet_Address;

            const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_URL);

            const transaction = await provider.getTransaction(paymentHash);

            // console.log("Payment Hash Result ")
            // console.log(transaction)

            let valueTransfer = transaction.value.toString();

            // console.log("Value from Transaction")
            // console.log(valueTransfer)

            

            const listedTokenDetails = await MarketPlaceModel.findById(nftId);

            console.log("Listed Token Details")
            console.log(listedTokenDetails.tokenId)

            if(!listedTokenDetails){
                res.status(400).send({
                    "status": "error",
                    "message": "There is no nft with this ID in our Database"
                })
            }
            
            try{
                if(transaction.from.toUpperCase() == buyerWallet ){
                    if(transaction.to.toUpperCase() == escroWallet.toUpperCase()){
    
                        const paymentInDB = PyamentHashModel.findOne({hash: paymentHash})
                        console.log("Payment In DB")
                        console.log(paymentInDB.hash)
    
                        if(paymentInDB.hash != null){
                            res.status(400).send({
                                "status": "error",
                                "message": "Payment is Already Consumed!"
                            })
                            return
                        }
    
                        const ethValue = ethers.utils.formatEther(valueTransfer)
                        console.log("Eth Value")

                        console.log(ethValue)
                        console.log(listedTokenDetails.price)


                        try{
                            const doc = new PyamentHashModel({
                                hash: paymentHash
                            })
    
                            const resultSaved = await doc.save();
                            if(ethValue >= listedTokenDetails.price){
                           
    
                                const transferResult = await ERC720Controller.transferNft(listedTokenDetails.tokenId , buyer);
    
                                
        
                                if(transferResult.status){
                                    // Transfer Payment to Seller after deduction of 2% fees
                                    const fees = (parseFloat(listedTokenDetails.price)  * 2 ) / 100 ;
                                    const valueToSend = parseFloat(listedTokenDetails.price) - fees 
        
                                    const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider)
        
                                    const transactionSendEthes = await wallet.sendTransaction(
                                        {
                                            to: listedTokenDetails.seller,
                                            value: ethers.utils.parseEther(valueToSend.toString()),
                                            gasLimit: 50000
                                        }
                                    )
        
                                    res.status(200).send({
                                        "status": "success",
                                        "message": "Money Transfer to seller and NFT Transfer to Buyer"
                                    })
                                    return
                                }else {
                                    const reverse = await PyamentHashModel.findByIdAndDelete(resultSaved._id);
                                    res.status(400).send({
                                        "status": "error",
                                        "message": "Transaction Failed!"
                                    })
                                    return
                                }
        
        
                            }
        
                        }catch(err){
                            res.status(200).send({
                                "status": "success",
                                "message": "You have consumed this transaction"
                            })
                            return
                        }
                        
                        
    
    
    
                    }else{
                        res.status(400).send({
                            "status": "error",
                            "message": "Payment is not sent to Our Escro Wallet"
                        })
                        return
                    }
                }else{
                    res.status(400).send({
                        "status": "error",
                        "message": "Buyer is not matched with transaction sender"
                    })
                    return
                }
            }catch(err){
                console.log("Inside Error TRY Catch")
                console.log(err)
            res.status(400).send({
                "status": "error",
                "message": "Transation hash metching Error"
            })
            return
            }

            // if(transaction.from.toUpperCase() == buyerWallet ){
            //     if(transaction.to.toUpperCase() == escroWallet.toUpperCase()){

            //         const paymentInDB = PyamentHashModel.find({hash: paymentHash})
            //         console.log("Payment In DB")
            //         console.log(paymentInDB)

            //         if(paymentInDB == null){
            //             res.status(400).send({
            //                 "status": "error",
            //                 "message": "Payment is Already Consumed!"
            //             })
            //             return
            //         }

            //         const ethValue = ethers.utils.formatEther(parseInt(valueTransfer))

            //         if(parseFloat(ethValue) >= parseFloat(listedTokenDetails.price)){
            //             const doc = new PyamentHashModel({
            //                 hash: paymentHash
            //             })

            //             const resultSaved = await doc.save();

            //             const transferResult = await ERC720Controller.transferNft(nftId , buyer);

            //             if(transferResult.status){
            //                 // Transfer Payment to Seller after deduction of 2% fees
            //                 const fees = (parseFloat(listedTokenDetails.price)  * 2 ) / 100 ;
            //                 const valueToSend = parseFloat(listedTokenDetails.price) - fees 

            //                 const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider)

            //                 const transactionSendEthes = await wallet.sendTransaction(
            //                     {
            //                         to: listedTokenDetails.seller,
            //                         value: ethers.utils.parseEther(valueToSend.toString()),
            //                         gasLimit: 50000
            //                     }
            //                 )

            //                 res.status(200).send({
            //                     "status": "success",
            //                     "message": "Money Transfer to seller and NFT Transfer to Buyer"
            //                 })
            //                 return



            //             }else {
            //                 res.status(400).send({
            //                     "status": "error",
            //                     "message": "Please Try Again Later Error in transfer of NFT!"
            //                 })
            //                 return
            //             }


            //         }




            //     }else{
            //         res.status(400).send({
            //             "status": "error",
            //             "message": "Payment is not sent to Our Escro Wallet"
            //         })
            //         return
            //     }
            // }else{
            //     res.status(400).send({
            //         "status": "error",
            //         "message": "Buyer is not matched with transaction sender"
            //     })
            //     return
            // }

            // res.status(202).send({
            //     "status": "success",
            //     "message": "Transaction sent successfully"
            // })

        } catch (err) {
            console.log("Fetching Erroe");
            console.log(err)
            res.status(400).send({
                "status": "error",
                "message": "Fetching Error"
            })
            return
        }
    }
}

export default MarketPlaceController;

// get metadata of JSON file 
//chat.openai.com/share/80cb53d2-391a-4e23-815a-807a2e6a1f78