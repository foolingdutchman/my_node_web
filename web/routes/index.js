var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {
  //  res.redirect('/login');
  res.redirect('/users/read');
});
router.get('/login', function(req, res, next) {
   res.render('login', { title: 'LogIn' });
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

module.exports = router;

