var pool = require('../util/dbconnection');

var locality = {

	// all locality related querys    
	addLocality: function(inputData, cb){
		var sql = "insert into locality (LOCALITYNAME, CITYID, CREATIONDATE, UPDATIONDATE)values('"+inputData.lname+"','"+inputData.cname+"', now(), now())";
		console.log('quer is wor='+sql);
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
	},
	listLocality: function(cb){
		var sql = "SELECT * FROM locality l INNER JOIN city c ON l.CITYID = c.CITYID";
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
	},
	listLocalityByCity: function(cityid, cb){
		var sql = "SELECT * FROM locality l INNER JOIN city c ON l.CITYID = c.CITYID where c.CITYID="+cityid;
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
	},
	/*joinLocality: function(cb){
        var sql = " SELECT * FROM locality INNER JOIN city ON locality.LOCALITYID = city.CITYID";
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
	getLocalityById: function(lid, cb){
		var sql = "select * from locality where LOCALITYID="+lid;
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
	},
	localityUpdate: function(inputData, cb){
		var sql = "update locality set LOCALITYNAME='"+inputData.lname+"', CITYID="+inputData.cid+", UPDATIONDATE= now() where LOCALITYID="+inputData.lid;
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
	},
	deleteLocality: function(lid, cb){
		var sql = "delete from locality where LOCALITYID="+lid;
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
	},
}

module.exports = locality;