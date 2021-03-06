var pool = require('../util/dbconnection');

var state = {
	//all state related querys
	addState: function(inputData, cb){
		var sql = "insert into state (STATENAME, CREATIONDATE, UPDATIONDATE)values('"+inputData.sname+"',now(), now())";
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
	listState: function(cb){
		console.log('02');
		var sql = "select * from state";
		console.log('sql', sql);
		pool.getConnection(function(error, connection){
			console.log('conn', error, connection);
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
	getStateById: function(id, cb){
		var sql = "select * from state where stateid="+id;
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
	updateState: function(inputData, cb){
		var sql = "update state set STATENAME='"+inputData.sname+"', UPDATIONDATE=now() where stateid="+inputData.sid;
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
	deleteState(sid, cb){
		var sql = "delete from state where stateid="+sid;
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
	addcontactus: function(inputData, cb){
		var sql = "insert into contactus (username, emailid, mobileno, message, CREATIONDATE, UPDATIONDATE)values('"+inputData.username+"','"+inputData.emailid+"','"+inputData.mobileno+"','"+inputData.message+"' ,now(), now())";
		console.log('jkadsjkf'+sql);
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

module.exports = state;