var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
  var db = mongoose.connect(config.db);
  require ('../app/models/member.server.model');
  // require('../app/models/user.model');
  // require('../app/models/person.model');
  return db;
};
