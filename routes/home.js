var express = require('express');
var fileExtension = require('file-extension');
var statemodel = require('../model/statemodel');
var citymodel = require('../model/citymodel');
var localitymodel = require('../model/localitymodel'); 
var categorymodel = require('../model/categorymodel');
var usermodel = require('../model/usersmodel');
var adsmodel = require('../model/adsmodel');
var router = express.Router();
var mv = require('mv');
var router = express();

router.get('/', function(req, res, next){
	categorymodel.listCategory('', function(error, result) {
		if (error) {
			res.render('home', {error:error});
		}
		else {
				var listData = result;
			//res.render('home', {data:result, userdata:req.session});
			adsmodel.listAds(function(error, result){
				if (error) {
					res.render('home', {error:error});
				}
				else{
					console.log(listData);
					
					var pcatIdwiseArr = {};
					listData.forEach(function(element) {
						if (pcatIdwiseArr[element.PARENTCATEGORYID]) {
							var newArr = pcatIdwiseArr[element.PARENTCATEGORYID];
							newArr.push(element);
							pcatIdwiseArr[element.PARENTCATEGORYID] = newArr; 
						} else {
							var newArr = [];
							newArr.push(element)
							pcatIdwiseArr[element.PARENTCATEGORYID] = newArr
						}
					});
					console.log('Here '+JSON.stringify(pcatIdwiseArr));
					
					res.render('home', {categorydata:pcatIdwiseArr, listAds:result, userdata:req.session});
				}
			});

		}
	});
	
});

router.get('/userlogin', function(req, res, next){
	res. render('userlogin');
});

router.get('/registration', function(req, res, next){
	res. render('registration');
});

router.post('/registrationdata', function(req, res, next){
	var inputfielddata4 ={
		uname :req.body.uname,
		mob :req.body.mob,
		email :req.body.email,
		status :req.body.status,
		upass :req.body.upass,	
	}
	usermodel.addUsers(inputfielddata4, function(error, result){
		if (error) {
			var msg = 'wrong input';
			res.redirect('/registration?error'+msg);
		}
		else{
			res.redirect('/');
		}
	});
});
router.get('/userlogindata', function(req, res, next){
	res. render('userlogin');
});

router.get('/addnewads', function(req, res, next) {
    //res.render('addnewads');
    categorymodel.listCategory('', function(error, result){
    	if (error) {
    		res.render('addnewads', {error:error});
    	}
    	else{
    		var listData = result;
    		//res.render('addnewads'{data:result})
    statemodel.listState(function(error, result){
    	if (error) {
    		res.render('addnewads', {error:error});
    	}
    	else{
    		res.render('addnewads', {data:listData, listState:result});
    	}
    });		
    	}
    });
});

router.post('/addnewadsdata', function(req, res, next){
	
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
	adsmodel.addAds(inputfielddata5, function(error, result){
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
					res.redirect('/');
				}
			});
		}
	});
	 
});

router.get('/adsdetail', function(req, res, next){
	var id = req.query.adsid;
	adsmodel.getAdsById(id, function(error, result){
		if (error) {
			res.render('home', {error:error});
		}
		else{
			res.render('adsdetail', {data:result, userdata:req.session});
		}
	});
	
});

router.get('/adsdetail', function(req, res, next){
	categorymodel.listCategory('', function(error, result) {
		if (error) {
			res.render('home', {error:error});
		}
		else {
				var listData = result;
			//res.render('home', {data:result, userdata:req.session});
			adsmodel.listAds(function(error, result){
				if (error) {
					res.render('home', {error:error});
				}
				else{
					console.log(listData);
					
					var pcatIdwiseArr = {};
					listData.forEach(function(element) {
						if (pcatIdwiseArr[element.PARENTCATEGORYID]) {
							var newArr = pcatIdwiseArr[element.PARENTCATEGORYID];
							newArr.push(element);
							pcatIdwiseArr[element.PARENTCATEGORYID] = newArr; 
						} else {
							var newArr = [];
							newArr.push(element)
							pcatIdwiseArr[element.PARENTCATEGORYID] = newArr
						}
					});
					console.log('Here '+JSON.stringify(pcatIdwiseArr));
					
					res.render('adsdetail', {categorydata:pcatIdwiseArr, listAds:result, userdata:req.session});
				}
			});

		}
	});
	
});




module.exports = router;