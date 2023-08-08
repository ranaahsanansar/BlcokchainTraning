const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/api/cli-data', (req, res) => {
  const cliCommand = 'ord --testnet wallet transactions';

  exec(cliCommand, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    const data = {
      result: stdout.toString()
    };
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});