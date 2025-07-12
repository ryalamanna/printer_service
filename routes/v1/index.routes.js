const express = require('express');
const printerRouter = require('./printer.routes');
const { getLocalIP } = require('../../utils/ip.utils');

const indexV1Router = express.Router();



indexV1Router.use('/printer',printerRouter)
indexV1Router.get('/getIp',(req,res)=>{
  const clientIp = getLocalIP()
  res.send(clientIp);
})




module.exports = indexV1Router;