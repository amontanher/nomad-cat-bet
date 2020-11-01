const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const MainController = require("./src/MainController");

app.use(bodyParser.json({ strict: false, limit: '10mb' }));

app.get('/fishes', MainController.getAllFishes);

app.get('/bet', MainController.getAllBets);
app.post('/bet', MainController.createBet);

module.exports.handler = serverless(app);