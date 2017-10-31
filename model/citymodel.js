var pool = require('../util/dbconnection');

var city = {

	// all city related query
    addCity : function(inputData, cb){
        var sql = "insert into city(CITYNAME, STATEID, CREATIONDATE, UPDATIONDATE) values('"+inputData.cname+"', "+inputData.sname+", now(), now())";
        console.log('this is working='+sql);
        pool.getConnection(function(err, connection){
        if (err) {
            console.log('connection error'+err);
        }
        else{
            connection.query(sql, function(err, result){
                if (err) {
                    cb(err, null);
                }
                else{
                    cb(null, result);
                }
                });
            }
            connection.release();   
        });
    },
    listCity : function(cb){
        var sql = "SELECT * FROM city INNER JOIN state ON city.CITYID = state.STATEID";
        pool.getConnection(function(err, connection){
            if (err) {
                    console.log('connection error'+err);
            }
        else{
            connection.query(sql, function(err, result){
               	if (err) {
                    cb(err, null);
                }
                else{
                    cb(null, result);
                }
                });
            }
            connection.release();
        });
                
    },
    listCityByState : function(stateid, cb){
        var sql = "SELECT * FROM city c INNER JOIN state s ON c.CITYID = s.STATEID WHERE c.STATEID="+stateid;
        pool.getConnection(function(err, connection){
            if (err) {
                    console.log('connection error'+err);
            }
        else{
            connection.query(sql, function(err, result){
                if (err) {
                    cb(err, null);
                }
                else{
                    cb(null, result);
                }
                });
            }
            connection.release();
        });
                
    },
    /*joinCity: function(cb){
        var sql = " SELECT * FROM city INNER JOIN state ON city.CITYID = state.STATEID";
        pool.getConnection(function(error, connection){
            if (error) {
                console.log('connection error'+error);
            }
            else{
                connection.query(sql, function(error, result){
                    if (error) {
                        cb(error, null);
                    }
                    else{
                        cb(null, result);
                    }
                });
            }
        });
    },*/    
    getCityById: function(id, cb) {
        var sql = "select * from city where CITYID="+id;
        console.log('adfd ='+sql);
        pool.getConnection(function(err, connection){
            if (err) {
                console.log('Connection Error :'+err);
            } else {
                connection.query(sql, function(err, result) {
                    if (err) {
                        cb(err, null);
                    } else {
                        cb(null, result);
                    }
                });
            }
            connection.release();
        });

    },
    updateCity: function(inputData, cb){
        var sql = "update city set CITYNAME='"+inputData.cname+"', STATENAME='"+inputData.sname+"', STATEID="+inputData.sid+", UPDATIONDATE=now() where cityid="+inputData.cid;
        console.log('quer is wor='+sql);
        pool.getConnection(function(err, connection){
            if (err) {
                console.log('connection error'+error);
            }
            else{
                connection.query(sql, function(err, result){
                    if (err) {
                        cb(err, null);
                    }
                    else
                    {
                        cb(null, result);
                    }
                });
            }
            connection.release();
        });
    },
    deleteCity: function(cid, cb){
        var sql = "delete from city where cityid="+cid;
        pool.getConnection(function(error, connection){
            if (error) {
                console.log('connection error'+error);
            }
            else{
                connection.query(sql, function(error, result){
                    if (error) {
                        cb(error, null);
                    }
                    else{
                        cb(null, result);
                    }
                });
            }
            connection.release();
        });
    }
}

module.exports = city;