const express = require('express');
const app = express();
const BitcoinCore = require('bitcoin-core');

const bitcoinConfig = {
  host: 'localhost',
  port: 18332,
  username: 'ahsan',
  password: '12345678',
};

const bitcoin = new BitcoinCore(bitcoinConfig);
const client = new BitcoinCore(bitcoinConfig);

app.get('/transaction/:txHash', async (req, res) => {
  try {
    const txHash = req.params.txHash;

    const transaction = await bitcoin.getRawTransaction(txHash, true);

    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

async function getLatestTransactionHash() {
  try {
    const blockCount = await client.getBlockCount();
    const blockHash = await client.getBlockHash(blockCount);
    const block = await client.getBlock(blockHash);

    console.log(block.tx.length)

    if (block.tx.length > 0) {
      const latestTransactionHash = block.tx[0]; // Get the first transaction's hash
      return latestTransactionHash;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

app.get('/latest', async (req, res) => {
  const latestTransactionHash = await getLatestTransactionHash();
  if (latestTransactionHash) {
    console.log('Latest Transaction Hash:', latestTransactionHash);
    try {
      const txHash = latestTransactionHash;

      const transaction = await bitcoin.getRawTransaction(txHash, true);

      res.json(transaction);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
  } else {
    console.log('No transactions found in the latest block.');
  }
});

app.get("/all-latest", async (req, res) => {
  try {

    const blockCount = await client.getBlockCount();
    const blockHash = await client.getBlockHash(blockCount);
    const block = await client.getBlock(blockHash);

    const transactionDataArray = []

    if (block.tx.length > 0) {
      console.log("I am inside if condition")
      for (let i = 0; i < block.tx.length; i++) {
        console.log("I am inside Loop" ,  i )
        const txHash = block.tx[i];
        const transaction = await bitcoin.getRawTransaction(txHash, true);

        transactionDataArray.push(transaction);
      }
      res.json(transactionDataArray)
    } else {
      return null;
    }

  } catch (error) {
    res.send("Nothing")
  }
})

const port = 3000;
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});