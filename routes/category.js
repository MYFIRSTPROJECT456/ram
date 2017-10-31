var express = require('express');

var router = express.Router();
var maindata = require('../model/categorymodel');

router.get('/addcat', function(req, res, next){
	maindata.listCategory('', function(error, result){
		if (error) {
			res.render('addcat', {error:error});
		}
		else{
			res.render('addcat', {data:result, userdata:req.session});
		}
	});
});

router.post('/addcatdata', function(req, res, next){
	var inputfielddata2 = {
		cid : req.body.cid,
		cname :req.body.cname,
		pid : req.body.pid,

	}
	console.log(inputfielddata2);
	maindata.addCategory(inputfielddata2, function(error, result){
		if (error) {
			var msg = 'wrong input';
			res.redirect('/admin/category/addcat?error'+msg);
		}
		else {
			res.redirect('/admin/category');
		}
	});

});

router.get('/', function(req, res, next){
	maindata.listCategory('', function(error, result){
		if (error) {
			res.render('category', {error:error});
		}
		else{
			res.render('category', {data:result, userdata: req.session});
		}
		//console.log(userdata);
	});
});

router.get('/updatecat', function(req, res, next){
    var id = req.query.categoryid;
	maindata.getCategoryById(id, function(error, result){
		if (error) {
			res.render('category', {error:error});
		}
		else{
			console.log('se in wrong='+req.session);
			res.render('updatecat', {data:result, userdata:req.session});
		}
	});
});
router.post('/updatecatdata', function(req, res, next){
	var inputfielddata2 = {
		cid : req.body.cid,
		cname :req.body.cname,
		pid : req.body.pid,
	}
	maindata.updateCategory(inputfielddata2, function(error, result){
		if (error) {
			var msg = 'wrong input';
			res.redirect('/admin/category/updatecat?categoryid'+req.body.cid);
		}
		else {
			res.redirect('/admin/category');
		}
	});

});	    
    
router.get('/delete', function(req, res, next){
	var id = req.query.categoryid;
    maindata.deleteCategory(id, function(error, result){
    res.redirect('/admin/category');
	});
});
router.post('/getsubcategorybycategory', function(req, res, next) {
    console.log('Inside ajax');
    var categoryid = req.body.categoryid; 
    maindata.listCategory(categoryid, function(error, result){
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