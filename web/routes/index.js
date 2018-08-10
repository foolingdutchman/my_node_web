var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req, res, next){
var body=  req.body;
// var jsonbody=JSON.parse(body);
// jsonbody.fname;
console.log(body);
 console.log("name:"+body.fname); 
 replyEmail(body);
// res.send(body);
var response={
"is_success":true,
"code":200,
"data":body
}

res.send(body);
});
   function replyEmail(meesage){
      
    global.Models.users.create({name: message.fname, email: message.email, message: message.message}).exec(function(err, users) {
    if (err) {
        console.log('err ' + err) ;
      res.status(500).json({error: 'Error when trying to create user.'});
    }
    if (users) {
      console.log('Users id ' + users.id);
      // succesful, so render
      // res.render('user_detail', {
      //   title: 'Details of the User Created',
      //   user_detail: users
      // });
    //   res.send(message);
    }
  });

   
    }

module.exports = router;

