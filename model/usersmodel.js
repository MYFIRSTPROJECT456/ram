var pool = require('../util/dbconnection');

var users = {

	//all users related querys	
	addUsers: function(forms, inputData, cb){
		//console.log('any thing2');
			
			//var setQuery ='';
			var columns ="";
			var values = "";
			for(var key in inputData){
				console.log('key:'+key+''+'values:'+inputData[key]);
				
				//setQuery +=" " key +"='"+inputData[key]+"',"
				columns +=" "+key+","
				values +=" '"+inputData[key]+"',";
			}
			columns = columns.substring(0, columns.length -1);
			values = values.substring(0, values.length -1);
		var sql = "insert into "+forms.tablename+"("+columns+", CREATIONDATE, UPDATIONDATE)values("+values+", now(), now())";
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
	listUsers: function(forms,cb){
		var sql = "select * from users "+forms.tablename+"";
		console.log('select'+sql);
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
	getUserById: function(forms, getId, cb){

		var sql = "select * from "+forms.tablename+" where USERID = "+getId.USERID;
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
	updateUsers: function(forms, inputData, cb){
console.log('inputData', inputData);
		var setQuery ='';
		var whereQuery = '';
			//var columns ="";
			//var values = "";
			for(var key in inputData.setkeyvalue){
				//console.log('key:'+key+''+'values:'+inputData[key]);
				
				setQuery +=" "+key +"='"+inputData.setkeyvalue[key]+"',"
				
			}
			for(var key in inputData.setwhere){
				//console.log('key:'+key+''+'values:'+inputData[key]);
				
				whereQuery +=' '+key +"='"+inputData.setwhere[key]+"' AND"
				
			}
			setQuery = setQuery.substring(0, setQuery.length -1);
			whereQuery = whereQuery.substring(0, whereQuery.length -3);
		var sql = "update "+forms.tablename+" set "+setQuery+", UPDATIONDATE=now() WHERE "+whereQuery;
	console.log('queyr'+sql);
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
	deleteUsers: function(forms, uid, cb){
		var sql = "delete from "+forms.tablename+" where userid="+uid;
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