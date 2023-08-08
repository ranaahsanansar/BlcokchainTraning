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

const port = 3000;
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});