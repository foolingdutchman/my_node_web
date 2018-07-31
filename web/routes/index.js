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
res.send(body);
var response={
"is_success":true,
"code":200,
"data":body
}
replyEmail(body);
res.send(body);
});
   function replyEmail(data){
        var message=JSON.parse(data);
        alertMsg("Hi"+message.fname+",你的信息已收到，谢谢支持！");
    let transporter = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        secure: true,
        auth: {
        user: 'dfinity_buzz@163.com', //邮箱的账号
        pass: 'hehao1987'//邮箱的密码
        }
    });
    let mailOptions = {
        from: '"Fred Foo 👻" <dfinity_buzz@163.com>', //邮件来源
        to: message.email, //邮件发送到哪里，多个邮箱使用逗号隔开
        subject: 'Re:'+message.message, // 邮件主题
        text: 'Hello world ?', // 存文本类型的邮件正文
        html: '<b>Hello world ?</b>' // html类型的邮件正文
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    }

module.exports = router;

