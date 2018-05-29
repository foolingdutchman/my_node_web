var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodesample"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   insert("xiaoming","123456");
  query();
  con.end();
});
 //增
function insert(name, pass){
  var sql="INSERT INTO userinfo (Id,UserName,UserPass) VALUES(0,?,?)";
  var param=[name,pass];
 
con.query(sql,param,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});
}

  //查
function query(){
    var  sql = 'SELECT * FROM userinfo';
     con.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
}