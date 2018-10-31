const express = require('express');
const app = express();
const db = require('./database');
const port = 5000;

app.use(express.static('public'));

app.get('/api', async (req,res) => {
  let result = await db.getProducts();
  res.send({express: result});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
