const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.send("It is working continuously!");
});

app.get("/info", (req, res) => {
  res.send({
    'Name': 'Mohit',
    'Age': '27'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
