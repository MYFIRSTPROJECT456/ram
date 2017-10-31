var express = require('express');

var router = express.Router();
var maindata = require('../model/usersmodel');

router.get('/adduse', function(req, res, next){
	res.render('adduse', {userdata:req.session});
});
router.post('/addusedata', function(req, res, next){
	var inputfielddata4 ={
		uname :req.body.uname,
		mob :req.body.mob,
		email :req.body.email,
		status :req.body.status,
		upass :req.body.upass,	
	}
	maindata.addUsers(inputfielddata4, function(error, result){
		if (error) {
			var msg = 'wrong input';
			res.redirect('/admin/users/adduse?error'+msg);
		}
		else{
			res.redirect('/admin/users');
		}
	});
});

router.get('/', function(req, res, next){
	maindata.listUsers(function(error, result){
		if (error) {
			res.render('users', {error:error});
		}
		else{
			res.render('users', {data:result, userdata:req.session});
		}
	});
});

router.get('/updateuse', function(req, res, next){
	var id = req.query.usersid;
	maindata.getUserById(id, function(error, result){
		if (error) {
			res.render('users', {error:error});
		}
		else{
			res.render('updateuse', {data:result, userdata:req.session});
		}
	});
});
router.post('/updateusedata', function(req, res, next){
	var inputfielddata4 = {
		uid : req.body.uid, 
		mob : req.body.mob, 
		email : req.body.email, 
		status : req.body.status, 
		upass : req.body.upass, 
	}
	maindata.updateUsers(inputfielddata4, function(error, result){
		if (error) {
			res.redirect('/admin/users/updateuse?usersid'+req.body.uid);
		}
		else{
			res.redirect('/admin/users');
		}
	});
});
router.get('/deleteuse', function(req, res, next){
	var id = req.query.usersid;
	maindata.deleteUsers(id, function(error, result){
		res.redirect('/admin/users');	
	});
});

module.exports = router;