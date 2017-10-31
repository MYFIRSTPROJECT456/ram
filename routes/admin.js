/**/var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var adminapp = express();

var state = require('./state');
var city = require('./city');
var category = require('./category');
var locality = require('./locality');
var users = require('./users');
var ads = require('./ads');

var router = express.Router();
adminapp.use(cookieParser());
adminapp.use(session({secret: "Shh, its a secret!", cookie: { expires: new Date(Date.now() + (30 * 86400 * 1000) )}}));
var adminmodel = require('../model/adminmodel');


adminapp.post('/login', function(req, res, next) {
  
  var username ;
  var msg ;
  console.log('admin login');
  adminmodel.adminLogin(req.body, function(err, data) {
    console.log('here '+data);
    if (data === false || data === null || data =='') {
       msg = 'Wrong username and password';
       res.redirect('/admin?msg='+msg);
    } else {
      console.log('login is successful');
       req.session.ADMINUSER = data[0].ADMINUSER;
       console.log('here '+data[0].ADMINUSER);
       req.session.ADMINID = data[0].ADMINID; 
       console.log(req.session);
       res.redirect('/admin/state');
    }
  });
});

adminapp.use(function(req, res, next) {
  console.log(req.path);
  console.log(req.session.ADMINUSER)
    if(req.session.ADMINUSER || req.path ==='/') {
      next();
    } else {
      res.redirect('/admin');
    }

});

adminapp.use('/state', state);
adminapp.use('/city', city);
adminapp.use('/category', category);
adminapp.use('/locality', locality);
adminapp.use('/users', users);
adminapp.use('/ads', ads);
adminapp.use('/', function(req, res, next){
  res.render('login');
});





module.exports = adminapp;
