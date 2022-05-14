var express = require('express');
var router = express.Router();




router.get('/admin', async function(req, res, next) {
 // var data = await homeModel.getProds();
  console.log('test')
  //res.json(data);
});



module.exports = router;
