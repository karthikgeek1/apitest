const express = require('express');
const serverless = require('serverless-http')
const app = express();
const apidata = require('../data.json')
const router = express.Router()

router.get('/services', (req,res)=>{
    res.send(apidata)
})

router.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/functions/index', router)
module.exports.handler = serverless(app)