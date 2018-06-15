var pool = require('../util/dbconnection');

var category = {

	// all category related query	
	addCategory: function(inputData, cb){
		var sql = "INSERT into category(CATEGORYNAME, PARENTCATEGORYID,CREATIONDATE, UPDATIONDATE)values('"+inputData.cname+"',"+inputData.pid+", NOW(), NOW())";
		console.log('query is working='+sql);
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
    listCategory: function(parentcategoryid, cb){
    	var where = '';
    	if (parentcategoryid !== '') {
    		where = " WHERE a.parentcategoryid= "+parentcategoryid;
    	}
		var sql = "select a. * , b.CATEGORYNAME PARENTCATNAME FROM category a LEFT JOIN category b on a.PARENTCATEGORYID = b.CATEGORYID"+where;
		console.log('0120', sql);
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
	
	getCategoryById: function(id, cb){
		var sql = "select * from category where categoryid="+id;
		console.log('geeting data'+sql);
		pool.getConnection(function(error, connection){
			if (error) {
				console.log('connection error');
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
    updateCategory: function(inputData, cb){
    	var sql = "update category set CATEGORYNAME='"+inputData.cname+"', PARENTCATEGORYID="+inputData.pid+", UPDATIONDATE=now() where categoryid="+inputData.cid;
    	console.log('query is nodk='+sql);
        pool.getConnection(function(error, connection){
        	if(error){
        		console.log('connection, error'+ error);
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
    deleteCategory: function(cid, cb){
		var sql = "delete from category where categoryid="+cid;
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

module.exports = category;