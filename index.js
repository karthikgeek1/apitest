const express = require('express');
const app = express();
const apidata = require('../data.json')

app.get('/services', (req,res)=>{
    res.send(apidata)
})

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3000, ()=>{
    console.log('listening')
})
