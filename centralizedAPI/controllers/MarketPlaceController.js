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
                const nftContractData = new ethers.Contract(contractAddress, abi, provider);

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

    static buyNft = async (req, res) => {


        const { nftId, buyer, paymentHash } = req.body;

        try {
            const nftDetail = await MarketPlaceModel.find({ tokenId: nftId });

            

            res.status(202).send({
                "status": "success",
                "message": "Transaction sent successfully"
            })

        } catch (err) {
            console.log("Fetching Erroe");
            console.log(err)
            res.status(400).send({
                "status": "error",
                "message": "Fetchinf Error"
            })
        }




    }
}

export default MarketPlaceController;

// get metadata of JSON file 
//chat.openai.com/share/80cb53d2-391a-4e23-815a-807a2e6a1f78



