var pool = require('../util/dbconnection');

var users = {

	//all users related querys	
	addUsers: function(inputData, cb){
		var sql = "insert into users(USERNAME, MOBILENO, EMAILID, STATUS, USERPASSWORD, CREATIONDATE, UPDATIONDATE)values('"+inputData.uname+"','"+inputData.mob+"','"+inputData.email+"','"+inputData.status+"','"+inputData.upass+"', now(), now())";
		console.log('uqery is ok='+sql);
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
	listUsers: function(cb){
		var sql = "select * from users";
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
	getUserById: function(uid, cb){
		var sql = "select * from users where userid="+uid;
		console.log('this is sql query is='+sql);
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
	updateUsers: function(inputData, cb){
		var sql = "update users set MOBILENO='"+inputData.mob+"', EMAILID='"+inputData.email+"', STATUS='"+inputData.status+"', USERPASSWORD='"+inputData.upass+"', UPDATIONDATE=now() WHERE USERID="+inputData.uid;
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
	},
	deleteUsers: function(uid, cb){
		var sql = "delete from users where userid="+uid;
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

module.exports = users;