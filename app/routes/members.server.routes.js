module.exports = function(app){
  var membersController = require('../controllers/members.controller.js');
  app.route('/members')
      .get(membersController.index)
      .post(membersController.create);

  app.route('members/:id')
      .get(membersController.show)
      .put(membersController.update)
      .delete(membersController.destroy);

};
