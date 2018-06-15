var pool = require('../util/dbconnection');

var ads = {

	// all ads related querys	
	addAds: function(inputData, cb){

		var sql = "insert into ads(TITLE, TAGSKEYS, DISCRIPTION, UPLOADIMG, WEBSITE, CATEGORYID, SUB_CATEGORY, STATEID, CITYID, LOCALITYID, AREA, STATUS, CREATIONDATE, UPDATIONDATE, EXT)values('"+inputData.tit+"','"+inputData.tags+"','"+inputData.dis+"','"+inputData.img+"','"+inputData.web+"',"+inputData.c1name+",'"+inputData.scat+"',"+inputData.sname+","+inputData.cityname+","+inputData.lname+",'"+inputData.area+"','"+inputData.status+"', now(), now(), '"+inputData.ext+"')";
		console.log('this is working='+sql);
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
	listAds: function(inputData, cb){
		var where ='';
		
		if (inputData.STATUS) {
			where += " STATUS='"+inputData.STATUS+"' AND";
		}
		if (inputData.TITLE) {
			where += " TITLE LIKE '%"+inputData.TITLE+"%' AND";
		}
		if (inputData.CATEGORYID) {
			where += " CATEGORYID = '"+inputData.CATEGORYID+"' AND";
		}
		if (inputData.SUB_CATEGORY) {
			where += " SUB_CATEGORY = '"+inputData.SUB_CATEGORY+"' AND";
		}
		if (where != '') {
			where = " WHERE "+where;
			where = where.substring(0, where.length -3);
		}
		
		/*
		if (adStatus) {
			where = " WHERE STATUS = '"+adStatus+"'";
		}
		*/
		var limitQuery = " LIMIT 0, 20";
		var sql = "select * from ads "+where+ " "+limitQuery;

		console.log('concate query'+sql);
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
	getAdsById: function(id, cb){
		var sql = "select * from ads where ADID="+id;
		// console.log('query is working='+sql);
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
	updateAds: function(inputData, cb){
		var sql = "update ads set TITLE='"+inputData.tit+"', TAGSKEYS='"+inputData.tags+"', DISCRIPTION='"+inputData.dis+"',UPLOADIMG='"+inputData.img+"', WEBSITE='"+inputData.web+"', CATEGORYID="+inputData.c1id+", SUB_CATEGORY="+inputData.scid+", STATEID="+inputData.sid+", CITYID="+inputData.cid+", LOCALITYID="+inputData.lid+", AREA='"+inputData.area+"', STATUS='"+inputData.status+"', UPDATIONDATE= now() where ADID="+inputData.aid;
		// console.log('qeur is woring='+sql);
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
	deleteAds: function(aid,cb){
		var sql = "delete from ads where ADID="+aid;
		// console.log('query is working='+sql);
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
	changeStatus: function(inputData, cb){
		var sql = "update ads set STATUS='"+inputData.status+"' where ADID="+inputData.aid;
		// console.log('qeury is woring='+sql);
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


module.exports = ads;