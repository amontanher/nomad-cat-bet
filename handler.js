const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require('express');
const MainController = require("./src/MainController");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json({ strict: false, limit: '10mb' }));

const uri = "mongodb+srv://aamontanher:aamontanher@clustermongo.yludg.mongodb.net/nomad?retryWrites=true&w=majority";
mongoose.connect(uri);

app.get('/fishes', MainController.getAllFishes);
app.get('/bet', MainController.getAllBets);
app.post('/bet', MainController.createBet);

module.exports.handler = serverless(app);