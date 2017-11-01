var express = require('express');

var router = express.Router();
var localitymodel = require('../model/localitymodel');
var citymodel = require('../model/citymodel');

router.get('/addloc', function(req, res, next){
	citymodel.listCity(function(error, result){
		if (error) {
			res.render('addloc', {error:error});
		}
		else{
			res.render('addloc', {data:result, userdata:req.session});
		}
	});	
});
router.post('/addlocdata', function(req, res, next){
	var inputfielddata3 = {
		lname : req.body.lname,
		cname : req.body.cname,
	}
	localitymodel.addLocality(inputfielddata3, function(error, result){
		if (error) {
			var msg = 'wrong input';
			res.redirect('/admin/locality/addloc?error'+msg);
		}
		else{
			res.redirect('/admin/locality');
		}
	});
});

router.get('/', function(req, res, next){
	localitymodel.listLocality(function(error, result){
		if (error) {
			res.render('locality', {error:error});
		}
		else{
			
			res.render('locality', {data:result, userdata: req.session});
		}
	});
});

router.get('/updateloc', function(req, res, next){
	var id = req.query.localityid;
	localitymodel.getLocalityById(id, function(error, result){
		if (error) {
			res.render('locality', {error:error});
		}
		else{
			res.render('updateloc', {data:result, userdata: req.session});
		}
	});
});

router.post('/updatelocdata', function(req, res, next){
	var inputfielddata3 = {
		lid : req.body.lid,
		lname : req.body.lname,
		cid : req.body.cid,
	}
	localitymodel.localityUpdate(inputfielddata3, function(error, result){
		if (error) {
			res.redirect('/admin/locality/updateloc?localityid'+req.body.lid);
		}
		else{
			res.redirect('/admin/locality');
		}
	});
});
router.get('/deleteloc', function(req, res, next){
	var id = req.query.localityid;
	localitymodel.deleteLocality(id, function(error, result){
		res.redirect('/admin/locality');
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
module.exports = router;