require("dotenv").config();
const express = require('express')
const cors = require('cors')

const app = express();
const PORT = 6789;
const apiPrefix = "/test";


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get(`/${apiPrefix}/healthcheck`, (request, response) => {
  try {
    response.status(200).send({ message: `Hello from ${apiPrefix}` });
  } catch (error) {
    response.status(500).send();
  }
});

app.listen(PORT, () =>console.log(`${apiPrefix} express js app is listening on ${PORT}`));

