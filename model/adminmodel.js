var pool = require('../util/dbconnection');
var adminData = {
    adminLogin : function(inputData, cb){
        pool.getConnection(function(err, connection){
            if (err) {
               throw err;     
            } else {
                var sql = " select * from admin where ADMINUSER = '"+inputData.username+"' and ADMINPASSWORD = '"+inputData.userpassword+"'";
                console.log('query is working='+sql);
                connection.query(sql,function(err, result) {

                    if (err) {
                        cb(err, null);
                    } else {
                        console.log("admin login="+result);
                        cb(null, result);
                    }
                });
            }
            connection.release();
        });
        
    }
}
module.exports = adminData;