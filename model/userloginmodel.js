var pool = require('../util/dbconnection');
var userData = {
    userLogin : function(inputData, cb){
        pool.getConnection(function(err, connection){
            if (err) {
               throw err;     
            } else {
                var sql = "select * from users where EMAILID='"+inputData.emailid+"' and USERPASSWORD = '"+inputData.userpassword+"'";
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
module.exports = userData;

/*}MOBILENO = '"+inputData.username+"',*/