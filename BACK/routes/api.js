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
  const mail = {
    to: 'diego.de@gmail.com',
    subject: 'Contacto via WEB',
    html: 'contacto bla bla'
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
    message: 'Envio ok'
  });

});



module.exports = router;
