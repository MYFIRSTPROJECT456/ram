var express = require('express');

var router = express.Router();
var categorymodel = require('../model/categorymodel');

router.get('/addcat', function(req, res, next){
	categorymodel.listCategory('', function(error, result){
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
	categorymodel.addCategory(inputfielddata2, function(error, result){
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
	categorymodel.listCategory('', function(error, result){
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
	categorymodel.getCategoryById(id, function(error, result){
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
	categorymodel.updateCategory(inputfielddata2, function(error, result){
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
    categorymodel.deleteCategory(id, function(error, result){
    res.redirect('/admin/category');
	});
});


router.post('/getsubcategorybycategory', function(req, res, next) {
	console.log('myname is');
    console.log('res012', req.body);
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

module.exports = router;