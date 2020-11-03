const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require('express');
const MainController = require("./../src/MainController");
const mongoose = require('mongoose');
const config = require('../config');
const app = express();

const uri = `mongodb+srv://${config.user}:${config.password}@clustermongo.yludg.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri);

app.use(bodyParser.json({ strict: false, limit: '10mb' }));

app.get('/fish', MainController.getAllFishes);
app.get('/bet', MainController.getAllBets);
app.post('/bet', MainController.createBet);

module.exports.handler = serverless(app);