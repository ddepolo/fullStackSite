var express = require('express');
var router = express.Router();
var homeModel = require('../models/burgers');
var util = require('util');



router.get('/home', async function(req, res, next) {
  var data = await homeModel.getProds();
  console.log(data)
  res.json(data);
});



module.exports = router;
