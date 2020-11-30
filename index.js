require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const apiPrefix = process.env.API_PREFIX;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(`/${apiPrefix}/`, (request, response) => {
  try {
    response.status(200).send({ message: `Hello from ${apiPrefix}` });
  } catch (error) {
    response.status(500).send();
  }
});

app.post(`/${apiPrefix}/`, (request, response) => {
  try {
    response
      .status(200)
      .send({ message: `Hello from ${apiPrefix} post request` });
  } catch (error) {
    response.status(500).send();
  }
});

app.get(`/${apiPrefix}/query`, (request, response) => {
  try {
    response.status(200).send({
      message: `Hello from ${apiPrefix}. Your query was ${JSON.stringify(
        request.query
      )}`,
    });
  } catch (error) {
    response.status(500).send();
  }
});

app.post(`/${apiPrefix}/body`, (request, response) => {
  try {
    response.status(200).send({
      message: `Hello from ${apiPrefix} post request. Your request body was ${JSON.stringify(
        request.body
      )}`,
    });
  } catch (error) {
    response.status(500).send();
  }
});

app.listen(PORT, () =>
  console.log(`${apiPrefix} express js app is listening on ${PORT}`)
);
