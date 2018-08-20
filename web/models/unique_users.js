var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity:'unique_users',
  connection:'mysql',

  attributes: {
    name: 'string',
    email: 'string',
    create_at: 'datetime'
  }
});

/*var user = Waterline.Collection.extend({
  identity:'user',
  connection:'mysql',

  attributes: {
    name: 'string',
    surname: 'string'
  }
});

module.exports = user;*/
