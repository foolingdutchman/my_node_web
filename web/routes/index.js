var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req, res, next){
var body=  req.body;
console.log(body);
res.send("您的信息已收到，我们会尽快与您联系！");
});

module.exports = router;
