var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var userapp = express();

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

router.use(cookieParser());
router.use(session({secret: "Shh, its a secret!", cookie: { expires: new Date(Date.now() + (30 * 86400 * 1000) )}}));
var userloginmodel = require('../model/userloginmodel');


router.get('/userlogout', function(req, res, next){
	console.log('Inisde Logout');
	req.session.destroy(function(err) {
		if(err) {
			console.log('Inside err:'+err);
		} else {
			console.log('Inside destroy:'+req.session);
			res.redirect('/');
		}
	});
});

router.get('/userlogin', function(req, res, next){
	res.render('userlogin');
});

router.post('/userlogin', function(req, res, next) {
  
  var username ;
  var msg ;
		  console.log('user login');
		 userloginmodel.userLogin(req.body, function(err, data) {
		 console.log('here '+JSON.stringify(data));
		    if (data === false || data === null || data =='') {
		       msg = 'Wrong username and password';
		       res.redirect('/userlogin?msg='+msg);
		    } else {
		      console.log('login is successful');
		      var user;
		      user = req.session;
		       user.USERNAME = data[0].USERNAME;
		       user.EMAILID = data[0].EMAILID;
		       //console.log('here '+data[0].EMAILID);
		       user.USERID = data[0].USERID; 
		       console.log(req.session);
		       res.redirect('/');
		    }
  		});
	});
/*
router.use(function(req, res, next) {
  console.log(req.path);
  console.log(req.session.EMAILID)
    if(req.session.EMAILID || req.path ==='/') {
      next();
    } else {
      res.redirect('/');
    }

});*/

router.get('/', function(req, res, next){
	categorymodel.listCategory('', function(error, result) {
					// console.log('listda01', result);
		if (error) {
			res.render('home', {error:error});
		}
		else {
				var listData = result;
			//res.render('home', {data:result, userdata:req.session});
			/*var adStatus = 'Approved';*/
				
			var inputData = {
				STATUS : 'Approved',
				TITLE: req.query.search,
			}
			// console.log('inputdata='+JSON.stringify(inputData));
	
			adsmodel.listAds(inputData,function(error, result){
				if (error) {
					res.render('home', {error:error});
				}
				else{
					//console.log(listData);
					
					var pcatIdwiseArr = [];
					listData.forEach(function(element) {
							// console.log('data012', element);
						if (pcatIdwiseArr[element.PARENTCATEGORYID]) {
							// console.log('damy data',pcatIdwiseArr[element.PARENTCATEGORYID]);
							var newArr = pcatIdwiseArr[element.PARENTCATEGORYID];
							 // console.log('assign data newArr123',newArr);
							newArr.push(element);
							 // console.log('newArr1234',newArr);
							pcatIdwiseArr[element.PARENTCATEGORYID] = newArr;
							 // console.log('final', pcatIdwiseArr[element.PARENTCATEGORYID]); 
						} else {
							var newArr = [];
							newArr.push(element);
							  // console.log('oen01', newArr);
							pcatIdwiseArr[element.PARENTCATEGORYID] = newArr
							// console.log('var10031', pcatIdwiseArr[element.PARENTCATEGORYID]);
						}
					});
					/*console.log('Here '+JSON.stringify(pcatIdwiseArr));*/
					//console.log(req.session.USERNAME);
					
					res.render('home', {categorydata:pcatIdwiseArr, listAds:result, userdata:req.session});
				}
			});

		}
	});
	
});



router.get('/registration', function(req, res, next){
	res. render('registration');
});
router.get('/aboutus', function(req, res, next) {
    categorymodel.listCategory('', function(error, result) {
        if (error) {
            res.render('home', {error:error});
        }
        else {
            var pcatIdwiseArr = {};
            result.forEach(function(element) {
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
            res.render('aboutus', {categorydata:pcatIdwiseArr, userdata:req.session});
        }
    }); 
});

router.post('/registrationdata', function(req, res, next){
	var inputfielddata4 ={
		uname :req.body.uname,
		mob :req.body.mob,
		email :req.body.email,
		status :req.body.status,
		upass :req.body.upass,
	};
	console.log(inputfielddata4);
	console.log('any thing');	
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



router.get('/addnewads', function(req, res, next) {
	if(req.session.EMAILID) {
		console.log('error inside');
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
    		res.render('addnewads', {data:listData, listState:result, userdata:req.session});
    	}
    });		
    	}
    });
    } else {
      res.redirect('/userlogin');
    }
    //res.render('addnewads');
    
});

router.post('/addnewadsdata', function(req, res, next){
	console.log('05', req.body, req.files);
	var fileExtension = require('file-extension');
    var sampleFile = req.files.img;
 	console.log(sampleFile);
 	console.log('Here'+__dirname);
 	var path = __dirname+'/../public/temp/'+sampleFile.name;
 	console.log('Path :'+path);
 	var ext = fileExtension(sampleFile.name);  // find extension
	sampleFile.mv(path, function(err) {
  			
  	});
  	//res.send('Hi');
  	console.log('inside ok1');
    var inputfielddata5 = {
		tit : req.body.tit,
		tags : req.body.tags,
		dis : req.body.dis,
		img : sampleFile.name,
		web : req.body.web,
		c1name : req.body.c1name,
		scat : req.body.scat,
		sname : req.body.sname,
		cityname : req.body.cityname,
		lname : req.body.lname,
		area : req.body.area,
		status : 'Pending',
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
		else {
			var adsData =result;
			var forms = {
				tablename: 'users'
			}
			usermodel.listUsers(forms, function(error, result){
				if (error) {
					res.render('home', {error:error});
				}
		else{
				var listData = result;			
			categorymodel.listCategory('', function(error, result) {
		if (error) {
			res.render('home', {error:error});
			}
				else{
					var pcatIdwiseArr = {};
					result.forEach(function(element) {
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
					res.render('adsdetail', {data:adsData, data1:listData, categorydata:pcatIdwiseArr, userdata:req.session});
				}
			});
			
			
		}
	});
		}
	});
	
});

/*router.get('/adsdetail', function(req, res, next){
	categorymodel.listCategory('', function(error, result) {
		if (error) {
			res.render('home', {error:error});
		}
		else {
			var pcatIdwiseArr = {};
			result.forEach(function(element) {
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
			res.render('adsdetail', {categorydata:pcatIdwiseArr, userdata:req.session});
		}
	});
	
});*/

router.post('/addcontactusdata', function(req, res, next){
	var addcontactusdata1 = {
		username : req.body.username,
		emailid :req.body.emailid,
		mobileno: req.body.mobileno,
		message: req.body.message,

	}
	console.log(addcontactusdata1);
	statemodel.addcontactus(addcontactusdata1, function(error, result){
		if (error) {
			var msg = 'wrong input';
			res.redirect('/contactus?error'+msg);
		}
		else {
			res.redirect('/');
		}
	});

});

router.get('/contactus', function(req, res, next){
	categorymodel.listCategory('', function(error, result) {
		if (error) {
			res.render('home', {error:error});
		}
		else {
			var pcatIdwiseArr = {};
			result.forEach(function(element) {
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
			res.render('contactus', {categorydata:pcatIdwiseArr, userdata:req.session});
		}
	});	
});


router.post('/getsubcategorybycategory', function(req, res, next) {
    
    var categoryid = req.body.categoryid; 
    categorymodel.listCategory(categoryid, function(error, result){
        if (error) {    
            res.send({error:error});
        }
        else{
            res.setHeader('content-type', 'text/json');
            res.send(result);
        }   
    });
});

router.post('/getcitybystate', function(req, res, next) {
    console.log('Inside ajax');
    var stateid = req.body.stateid; 
    citymodel.listCityByState(stateid, function(error, result){
        if (error) {    
            res.send({error:error});
        }
        else{
            res.setHeader('content-type', 'text/json');
            res.send(result);
        }   
    });
});

router.post('/getlocalitybycity', function(req, res, next) {
    console.log('Inside ajax');
    var cityid = req.body.cityid; 
    localitymodel.listLocalityByCity(cityid, function(error, result){
        if (error) {    
            res.send({error:error});
        }
        else{
            res.setHeader('content-type', 'text/json');
            res.send(result);
        }   
    });
});

router.get('/listing', function(req, res, next){
	categorymodel.listCategory('', function(error, result) {
		if (error) {
			res.render('listing', {error:error});
		}
		else {
			var listData = result;
			//res.render('home', {data:result, userdata:req.session});
			/*var adStatus = 'Approved';*/
				
			var inputData = {
				STATUS : 'Approved',
				TITLE: req.query.search,
				CATEGORYID : req.query.categoryid,
				SUB_CATEGORY:req.query.subcategoryid
			}
			console.log(inputData);
	
			adsmodel.listAds(inputData,function(error, result){
				if (error) {
					res.render('listing', {error:error});
				}
				else{
					//console.log(listData);
					
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
					/*console.log('Here '+JSON.stringify(pcatIdwiseArr));*/
					console.log(req.session.USERNAME);
					
					res.render('listing', {categorydata:pcatIdwiseArr, listAds:result, userdata:req.session});
				}
			});

		}
	});
	
});

module.exports = router;