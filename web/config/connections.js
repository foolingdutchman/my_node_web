var waterline = require('waterline');
var mysqlAdapter = require('sails-mysql');

module.exports.adapters = {
  mysql: mysqlAdapter
};

module.exports.connections = {
  mysql: {
    adapter: 'mysql',
    module: 'sails-mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'waterline_orm'

    //Don't change database name cause when db_utils.js will be run in the fourth step database will be created

    // OR (explicit sets take precedence)
    //module    : 'sails-mysql',
    //url       : 'mysql2://USER:PASSWORD@HOST:PORT/DATABASENAME'

    // Optional
    //charset   : 'utf8',
    //collation : 'utf8_general_ci'
  }
};
