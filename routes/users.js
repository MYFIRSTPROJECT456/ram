var express = require('express');

var router = express.Router();
var usersmodel = require('../model/usersmodel');

router.get('/adduse', function(req, res, next){
	res.render('adduse', {userdata:req.session});
});
router.post('/addusedata', function(req, res, next){
	var forms = {
		tablename: 'users'
	}
	var inputfielddata4 ={
		USERNAME :req.body.uname,
		MOBILENO :req.body.mob,
		EMAILID :req.body.email,
		STATUS :req.body.status,
		USERPASSWORD :req.body.upass,	
	}
	//console.log(inputfielddata4);

	usersmodel.addUsers(forms, inputfielddata4, function(error, result){
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
	var forms = {
		tablename: 'users'
	}
	usersmodel.listUsers(forms, function(error, result){
		if (error) {
			res.render('users', {error:error});
		}
		else{
			res.render('users', {data:result, userdata:req.session});
			console.log('req.session', req.session);
		}
	});
});

router.get('/updateuse', function(req, res, next){
	var forms = {
		tablename: 'users'
	}
	var getId = {
		USERID :req.query.usersid
	}
	// console.log('hjhk'+getId.USERID);
	//console.log('updateuse',id);
	usersmodel.getUserById(forms, getId,function(error, result){
		if (error) {
			res.render('users', {error:error});
		}
		else{
			res.render('updateuse', {data:result, userdata:req.session});
		}
	});
});
router.post('/updateusedata', function(req, res, next){
	var forms = {
		tablename: 'users'
	}
	var inputfielddata4 = {
		setkeyvalue: {
			MOBILENO :req.body.mob,
			EMAILID :req.body.email,
			STATUS :req.body.status,
			USERPASSWORD :req.body.upass	
		},
		setwhere: {
			USERID : req.body.uid	
		}
	}
	usersmodel.updateUsers(forms, inputfielddata4, function(error, result){
		if (error) {
			res.redirect('/admin/users/updateuse?usersid'+req.body.uid);
		}
		else{
			res.redirect('/admin/users');
		}
	});
});
router.get('/deleteuse', function(req, res, next){
	var forms = {
		tablename: 'users'
	}
	var id = req.query.usersid;
	usersmodel.deleteUsers(forms, id, function(error, result){
		res.redirect('/admin/users');	
	});
});

module.exports = router;