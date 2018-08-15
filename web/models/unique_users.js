var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity:'users',
  connection:'mysql',

  attributes: {
    name: 'string',
    email: 'string',
    time: 'datetime'
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
