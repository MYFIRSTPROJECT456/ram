var express = require('express');

var router = express.Router();
var statemodel = require('../model/statemodel');


//state related work
router.get('/add', function(req, res, next){
	res.render('add', {userdata:req.session});
});
router.post('/adddata', function(req, res, next){
	var inputfielddata = {
		sname : req.body.sname,
	}
	/*req.checkBody('sname', 'State name is required').notEmpty();

	var errors = req.validationErrors();

	if (errors) {
		console.log('Yes');
	}
	else{
		console.log('no');
	}*/

	statemodel.addState(inputfielddata, function(error, result){
		if (error) {
			var msg = 'input wrong';
			res.redirect('/admin/state/add?error='+msg);
		}
		else{
			res.redirect('/admin/state');
		}
	});
});

router.get('/', function(req, res, next){
	statemodel.listState(function(error, result){
		if (error) {
			res.render('state', {error:error});
		}
		else{
			res.render('state', {data:result, userdata: req.session});
		}	
	});
});

router.get('/update', function(req, res, next){
	var id = req.query.stateid;
	statemodel.getStateById(id, function(error, result){
		if (error) {
			res.render('state', {error:error});
		}
		else{
			res.render('update', {data:result, userdata:req.session});
		}
	});
});
router.post('/updatedata', function(req, res, next){
	var inputfielddata = {
		sid : req.body.sid,
		sname : req.body.sname,
	}
	statemodel.updateState(inputfielddata, function(error, result){
		if (error) {
			var msg = "wrong inupt";
			res.redirect('/admin/state/update?stateid='+req.body.sid);
		}
		else{
			res.redirect('/admin/state');
		}
	});
});

router.get('/delete', function(req, res, next){
	var id = req.query.stateid;
	statemodel.deleteState(id, function(error, result){
		res.redirect('/admin/state');
	});
});


module.exports = router;