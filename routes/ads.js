var express = require('express');
var fileExtension = require('file-extension'); 
var router = express.Router();
var mv = require('mv');
var maindata = require('../model/adsmodel');
var maindata1 = require('../model/categorymodel');
var maindata2 = require('../model/localitymodel');
var maindata3 = require('../model/statemodel');
var maindata4 = require('../model/citymodel');

router.get('/', function(req, res, next){
	maindata.listAds(function(error, result){
		if (error) {
			res.render('ads', {error:error});
		}
		else{
			res.render('ads', {data:result, userdata: req.session});
		}
	});
});

router.get('/addads', function(req, res, next){
	maindata3.listState(function(error, result){
		if (error) {
		   	res.render('addads', {error:error});
		}
		else{
			var stateData = result;
			//res.render('addads', {data:result});

		maindata1.listCategory('', function(error, result){
			if (error) {
				res.render('addads',{error:error});
			}
			else{
				res.render('addads',{data:stateData, listCategory:result, userdata: req.session});
			}
		});	
			}
	});	
			
});
router.post('/addadsdata', function(req, res, next){
	//var addapp = express(); 
	//addapp.use(fileUpload());

	//if (!req.files)
	var fileExtension = require('file-extension');
    var sampleFile = req.files.img;
 	console.log(sampleFile);
 	var path = __dirname+'/../public/temp/'+sampleFile.name;
 	var ext = fileExtension('sampleFile.name.png');  // find extension
	sampleFile.mv(path, function(err) {
  			console.log(err);
  	});
  	//res.send('Hi');
  	
    var inputfielddata5 = {
		tit : req.body.tit,
		tags : req.body.tags,
		dis : req.body.dis,
		img : sampleFile.name,
		web : req.body.web,
		c1name : req.body.c1name,
		scat : req.body.scat,
		sname : req.body.sname,
		cityname : req.body.cityname	,
		lname : req.body.lname,
		area : req.body.area,
		status : req.body.status,
		ext: ext
	}
	console.log(inputfielddata5);
	maindata.addAds(inputfielddata5, function(error, result){
		if (error) {
			var msg = 'wrong input';
			//res. redirect('/admin/ads/addads?error'+msg);
		}
		else{
			console.log('Last Insert Id'+result.insertId);
			var destPath= __dirname+'/../public/assets/'+result.insertId+'.'+ext;
			
			//res.redirect('/admin/ads');
			mv(path, destPath, function(error){
				if (error) {
					res.status(500).send(error);
				}
				else{
					res.redirect('/admin/ads');
				}
			});
		}
	});
	 
});

router.get('/updateads', function(req, res, next){
	var id = req.query.adsid;
	maindata.getAdsById(id, function(error, result){
		if (error) {
			res.render('ads', {error:error});
		}
		else{
			res.render('updateads', {data:result, userdata:req.session});
		}
	});
	/*res.render('updateads');*/
});
router.post('/updateadsdata', function(req, res, next){
	var inputfielddata5 = {
		aid : req.body.aid,
		tit : req.body.tit,
		tags : req.body.tags,
		dis : req.body.dis,
		img : req.body.img,
		web : req.body.web,
		c1id : req.body.c1id,
		scid : req.body.scid,
		sid : req.body.sid,
		cid : req.body.cid	,
		lid : req.body.lid,
		area : req.body.area,
		status : req.body.status,
	}
	console.log(inputfielddata5);
	maindata.updateAds(inputfielddata5, function(error, result){
		if (error) {
			res.redirect('/admin/ads/updateads?adsid='+req.body.aid);
		}
		else{
			res.redirect('/admin/ads');	
		}
	});
});
router.get('/deleteads', function(req, res, next){
	var id = req.query.adsid;
	maindata.deleteAds(id, function(error, result){
		res.redirect('/admin/ads');
	});
});

router.get('/changestatus', function(req, res, next){
	var id = req.query.adsid;
	var action = req.query.action;
	var status ='';
	if (action == 'Reject') {
		status = 'Rejected';
	} else if(action == 'Approve') {
		status = 'Approved';
	}

	var inputData = {
		aid:id,
		status:status
	}
	maindata.changeStatus(inputData, function(error, result){
		res.redirect('/admin/ads');
	});
});

module.exports = router;