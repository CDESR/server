module.exports = function(app) {
  // var index = require('../controllers/index.server.controller');
  //
  //
  // var about = require('../controllers/about.server.controller');
  //
  //
  // var contact = require('../controllers/contact.server.controller');

var staticpages = require('../controllers/staticpages.controller');

  app.get('/', staticpages.renderHome);
  app.get('/about', staticpages.renderAbout);
  app.get('/contact', staticpages.renderContact);
}
