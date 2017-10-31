var express = require('express');
var categorymodel = require('../model/categorymodel');
var usermodel = require('../model/usersmodel');
var adsmodel = require('../model/adsmodel');
var router = express.Router();

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
	res. render('home');
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
	/*res.render('updateads');*/
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