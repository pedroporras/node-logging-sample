
const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { createLogger, transports ,format} = require('winston');
const expressWinston = require('express-winston');
const winston = require('winston');
// const { createLogger } = require('winston');
const router = express.Router();


const PORT = process.env.PORT || 3000;

server.use(cors());
// server.use('/healthcheck', healthcheckRoutes);

server.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));
server.use(router);
server.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));


server.get('/', (req, res) => {
    res.json({ status: "I'm alive!" });
})
//server.use('/api', apiRoute);


module.exports = {
    server,
    PORT
};