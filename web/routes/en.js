var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('en', { title: 'Express' });
});

router.post('/',function(req, res, next){
  var body=  req.body;
  console.log(body);
  res.send("Thanks for your message!");
  });

module.exports = router;
