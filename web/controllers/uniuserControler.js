var debug = require('debug')('unique_users'); //https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment#Log_appropriately
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
module.exports.unique_users_list = (req, res, next) => {
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
      res.render('admin', {
        title: 'Users List',
        user_list: users
      });
    }
  });
};

// Display User create form on GET
module.exports.unique_user_create_get = (req, res, next) => {
  res.render('user_form', {title: 'Create user'});
};

// Create users
module.exports.unique_user_create_post = (req, res, next) => {
    // res.send(req.body);
    //寻找user
  global.Models.users.create({name: req.body.fname, email: req.body.email, message: req.body.message}).exec(function(err, users) {
    if (err) {
      res.status(500).json({error: 'Error when trying to create user.'});
    }
    if (users) {
      console.log('Users id ' + users.id)   
      res.send(req.body);
    }
  });
};

// Display User to delete on GET
module.exports.unique_user_delete_get = (req, res, next) => {
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
module.exports.unique_user_delete_post = (req, res, next) => {
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
module.exports.unique_user_update_get = (req, res, next) => {
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
module.exports.unique_user_update_post = (req, res, next) => {
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
