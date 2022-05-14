var express = require('express');
var router = express.Router();
var dbUsers = require('../models/dbUsers');


router.get('/', function(req, res, next) {
  res.render('index');
});



router.post('/', async (req, res, next) => {
  try {
    var usr = req.body.usr;
    var psw = req.body.psw;

    var data = await dbUsers.dbGetUser(usr, psw);

    if(data != undefined){
      req.session.user_id = data.id;
      req.session.user_nom = data.nombre;

      res.redirect('page2');

      console.log('login OK');
    }else{
      res.render('index', {
        mensajeErr: "Usuario o contraseña incorrectos."
      });

      console.log('ERROR login');
    }
  }catch(err){
    console.log(err);
  }
})





module.exports = router;
