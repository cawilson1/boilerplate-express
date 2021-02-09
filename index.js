require("dotenv").config();
console.log(process.env.DB_SERVER);
const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
const PORT = process.env.PORT;
const apiPrefix = process.env.API_PREFIX;
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  db: process.env.DB,
  options: {
   encrypt: true
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sql.connect(config)
  .then(pool => {

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
})
 .catch(error => console.log(error))
