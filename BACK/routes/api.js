var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
var burgersModel = require('../models/burgers');




router.get('/burgers', async function(req, res, next) {
  var data = await burgersModel.getProds();
  //console.log(data)
  res.json(data);
});

router.post('/contacto', async function(req, res, next) {
  //console.log(req.body.texto)
  const mail = {
    to: 'diego.de@gmail.com',
    subject: `Contacto via WEB de ${req.body.nombre}`,
    html: `Esta recibiendo este correo porque se realizo un contacto por web, datos: <br> Nombre: ${req.body.nombre} <br> Mail: ${req.body.email} <br> Mensaje: ${req.body.texto}`
  }

  const  transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
    
  });
  

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    mensaje: 'Envío ok'
  });

});


router.post('/enviopedido', async function(req, res, next) {
  //console.log(req.body)

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  envioNumber = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
  envioNumber = envioNumber.toUpperCase();
 
  const mail = {
    to: 'diego.de@gmail.com',
    subject: `Pedido via WEB`,
    html: `Esta recibiendo este correo porque se realizo un pedido por web. <br> Código: ${envioNumber}, <br> Pedido (en JSON): <br> ${JSON.stringify(req.body)}`
  }

  const  transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
    
  });
  

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    mensaje: `Envió realizado correctamente, su CODIGO DE PEDIDO ES: ${envioNumber}, indíquelo en el mostrador al retirar el pedido.`
  });

});



module.exports = router;
