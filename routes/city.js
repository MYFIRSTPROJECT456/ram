var express = require('express');

var router = express.Router();
var citymodel = require('../model/citymodel');
var statemodel = require('../model/statemodel');

router.get('/', function(req, res, next) { 
    citymodel.listCity(function(error, result){
        if (error) {    
            res.render('city', {error:error});
        }
        else{
            res.render('city', {data:result, userdata: req.session});
        }   
    });
});

router.get('/addcity', function(req, res, next) {
    statemodel.listState(function(error, result){
        if (error) {
            res.render('addcity', {error:error});
        }
        else{

            res.render('addcity', {data:result, userdata:req.session});
        }
    });
});

router.post('/addcitydata', function(req, res, next) {
    var inputfielddata1 = {
        cname : req.body.cname,
        sname : req.body.sname,
    }
    console.log(inputfielddata1);
    citymodel.addCity(inputfielddata1, function(error, result){
        if (error) {
            var msg = 'input wrong';
            res.redirect('/admin/city/cityadd?error='+msg);
        }
        else{
            res.redirect('/admin/city');
        }
    });
});

router.get('/updatecity', function(req, res, next) {
   
    var id = req.query.cityid;
    citymodel.getCityById(id, function(error, result){
        if (error) {
            res.render('city', {error:error});
        }
        else{
            
            var cityData = result;
            statemodel.listState(function(error, result){
                if (error) {
                    res.render('updatecity', {error:error});
                }
                else{
                    console.log('Inside else 1');
                    res.render('updatecity', {data:cityData, stateList:result, userdata:req.session});
                }
            }); 
            //console.log('Inside else 2 -1'+result[0].STATENAME);
            //res.render('updatecity', {data:cityData, stateList:result});
            //console.log('Inside else 2 -2'+result[0].CITYNAME);
        }
    });
    //res.render('updatecity');
});

router.post('/updatecitydata', function(req, res, next){
    console.log('0112', req.body);
    var inputfielddata2 = {
         cid : req.body.cid,
        cname : req.body.cname,
        sid : req.body.sid,
        sname : req.body.sname,
    }
    citymodel.updateCity(inputfielddata2, function(err, result){
        if (err) {
            
            res.redirect('/admin/city/updatecity?cityid='+req.body.cid);
        }
        else{
            res.redirect('/admin/city');
        }
    });
});

router.get('/delete', function(req, res, next){
    var id = req.query.deleteid;
    citymodel.deleteCity(id, function(error, result){
        res.redirect('/admin/city');
    });
});
router.post('/getcitybystate', function(req, res, next) {
    console.log('Inside ajax020', req.body);
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

module.exports = router;