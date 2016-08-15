var env = process.env.Node_ENV || 'development';

module.exports = require('./env/' + env + '.js');
