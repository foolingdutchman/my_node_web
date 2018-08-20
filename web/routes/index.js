var express = require('express');
var router = express.Router();
var users_controller = require('../controllers/usersControler');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {

  req.
  //  res.redirect('/login');
  // res.redirect('/users/read');
  global.Models.users.find().exec(function(err, users) {
    if (err) {
      res.status(500).json({error: 'Error when trying to find user.'});
    }
    /*
   * If a user is found, compare hashes of the password. Then, generate a session
   * ID and send it to the user. Additionally, store the session in our session-store.
   */
    if (users) {
      // succesful, so render
      res.render('admin', {
        title: 'Users List',
        user_list: users
      });
    }
  });
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

