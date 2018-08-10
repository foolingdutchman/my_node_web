var debug = require('debug')('users'); //https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment#Log_appropriately
var nodemailer = require('nodemailer');
//Users amount
module.exports.index = (req, res, next) => {
  global.Models.users.count().exec(function(err, users) {
    if (err) {
      res.status(500).json({error: 'Error when trying to find user.'});
    }
    if (users>=0) {
      // succesful, so render
      res.render('index', {
        title: 'Express.js + WaterLine ORM',
        user_count: users
      });
    }
  });
};

// Read users
module.exports.users_list = (req, res, next) => {
  /* var app = require('../app');
  app.models.users.find().exec(function(err, users) {*/
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
      res.render('user_list', {
        title: 'Users List',
        user_list: users
      });
    }
  });
};

// Display User create form on GET
module.exports.user_create_get = (req, res, next) => {
  res.render('user_form', {title: 'Create user'});
};

// Create users
module.exports.user_create_post = (req, res, next) => {
    // res.send(req.body);
  global.Models.users.create({name: req.body.fname, email: req.body.email, message: req.body.message}).exec(function(err, users) {
    if (err) {
      res.status(500).json({error: 'Error when trying to create user.'});
    }
    if (users) {
      console.log('Users id ' + users.id)
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
        from: '"dfinity_buzz👻" <dfinity_buzz@163.com>', //邮件来源
        to: users.email, //邮件发送到哪里，多个邮箱使用逗号隔开
        subject: 'Re:'+users.message, // 邮件主题
        text: 'Hello,'+users.name+','+'\r\n thanks for your support, we will read your message and contact you if it is needed. \r\n Let\'s keep in touch! \r\n Dfinity Buzz Lightyear ', // 存文本类型的邮件正文
        html: '<b>Hello,'+users.name+'</b> <br/> thanks for your support, we will read your message and contact you if it is needed.  <br/>  Let\'s keep in touch! <br/>  <b>Dfinity Buzz Lightyear</b>' // html类型的邮件正文
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
      // succesful, so render
      // res.render('user_detail', {
      //   title: 'Details of the User Created',
      //   user_detail: users
      // });
      res.send(req.body);
    }
  });
};

// Display User to delete on GET
module.exports.user_delete_get = (req, res, next) => {
  //console.log(`Id: ${req.params.id} from user`)
  global.Models.users.findOne({id: req.params.id}).exec(function(err, user) {
    if (err) {
      res.status(500).json({error: 'Error when trying to find user.'});
    }
    if (user) {
      console.log('hello')
      // succesful, so render
      res.render('user_delete', {
        title: 'Delete user',
        user_delete: user
      });
    }
  });
};

// Delete user
module.exports.user_delete_post = (req, res, next) => {
  global.Models.users.destroy({id: req.body.userid}).exec(function(err, users) {
    if (err) {
      res.status(500).json({error: 'Error when trying to delete user.'});
    }
    if (users) {
      res.redirect('/users');
    }
  });
};

// Display User to update on GET
module.exports.user_update_get = (req, res, next) => {
  global.Models.users.findOne({id: req.params.id}).exec(function(err, user) {
    if (err) {
      res.status(500).json({error: 'Error when trying to find user.'});
    }
    if (user) {
      // succesful, so render
      res.render('user_update', {
        title: 'Update user',
        user_update: user
      });
    }
  });

};

// Update users
module.exports.user_update_post = (req, res, next) => {
  global.Models.users.findOne({id: req.body.userid}).exec(function(err, user) {
    if (err) {
      res.status(500).json({error: 'Error when trying to find user.'});
    }
    if (user) {
      global.Models.users.update({
        name: user.name,
        surname: user.surname
      }, {
        name: req.body.name,
        surname: req.body.surname
      }).exec(function afterwards(err, users) {
        if (err) {
          res.status(500).json({error: 'Error when trying to update user.'});
        }
        if (users) {
          res.redirect('/users');
        }
      });
    }
  });
};
