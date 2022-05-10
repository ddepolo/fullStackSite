var express = require('express');
var router = express.Router();
var burgersModel = require('../models/burgers');




router.get('/burgers', async function(req, res, next) {
  var data = await burgersModel.getProds();
  //console.log(data)
  res.json(data);
});



module.exports = router;
