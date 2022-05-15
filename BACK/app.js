var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
var cors = require('cors');



require('dotenv').config();
const session = require('express-session');


var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var page2Router = require('./routes/page2');

const async = require('hbs/lib/async');

var app = express();


/*const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200
};*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: '4asd5sa4d5a', 
  resave: false, 
  saveUninitialized: true
}));







seguridad = async (req, res, next) => {
  if(req.session.user_id>0){
    next();
  }else{
    res.redirect('/');
  }
  
}

app.use('/', indexRouter);
app.use('/page2',seguridad, page2Router);
app.use('/api', cors(), apiRouter);


app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
