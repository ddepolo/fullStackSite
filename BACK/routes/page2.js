var express = require('express');
var router = express.Router();
require('dotenv').config();
var burgers = require('../models/burgers');
const util = require('util');
const multer  = require('multer')
const upload = multer({ dest: 'tmp/' })


var cloudinary = require("cloudinary");
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET

});


const uploader = util.promisify(cloudinary.uploader.upload);

router.get('/', async function(req, res, next) {
  var data = await burgers.getBurgers();

  data = data.map(item => {
    if(item.img_id){
      const imagen = cloudinary.image(item.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        item,
        imagen
      }
    }else{
      return {
        item,
        imagen: ''
      }
      
    }
  });

 
  
  res.render('page2', {
    usuario: req.session.user_nom, 
    resu:data, 
    postUrl:'/page2/add'
  });
  //console.log(req.session.user_nom);
});

router.get('/salir', function(req, res, next) {
  req.session.destroy();
  res.render('index');
});


router.post('/add', upload.single('imagen'), async (req, res, next) => {

  delete req.body.imagen;

  try {
    var img_id = '';
    if(req.file && Object.keys(req.file).length > 0){
      img_id = ( await cloudinary.v2.uploader.upload('tmp/'+req.file.filename)).public_id
    }
    
    if (req.body.nombre != ""){
      await burgers.sendBurgers({
        ...req.body, 
        img_id
      });
      res.redirect('/page2/');
    }

  }catch (err){
    console.log(err);
    
  }

  
})

router.get('/borrar/:id', async (req, res, next) => {
  var id = req.params.id;
  await burgers.delBurgers(id);
  res.redirect('/page2/');
  
})

router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var burger = await burgers.editBurgersGetInfo(id);
  var data = await burgers.getBurgers();

  
  data = data.map(item => {
    if(item.img_id){
      const imagen = cloudinary.image(item.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        item,
        imagen
      }
    }else{
      return {
        item,
        imagen: ''
      }
      
    }
  });

 
  
  res.render('page2', {
    usuario: req.session.user_nom, 
    burger,
    resu:data, 
    postUrl:'/page2/editar'
  });

  //res.render('page2', {burger, resu:data, postUrl:'/page2/editar'});
})



router.post('/editar', upload.single('imagen'),  async (req, res, next) => {

  
  delete req.body.imagen;

  try{
    var img_id = '';
    if(req.file && Object.keys(req.file).length > 0){
      img_id = ( await cloudinary.v2.uploader.upload('tmp/'+req.file.filename)).public_id

      obj = {
        nombre: req.body.nombre,
        detalle: req.body.detalle,
        precio: req.body.precio,
        img_id: img_id
      }
    }else{
      obj = {
        nombre: req.body.nombre,
        detalle: req.body.detalle,
        precio: req.body.precio
      }
    }
    

    await burgers.editBurgers(obj, req.body.id);
    res.redirect('/page2/');
  }catch(err){
    console.log(err)
  }
});



module.exports = router;
