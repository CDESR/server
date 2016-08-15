var Member = require('mongoose').model('Member');

module.exports={
  index: function(req,res, next){
    Member.find({}, function (err, members) {
      if(err) return next(err);

      res.json(members);
    });
  },

  create: function(req,res){
    res.send('create route');
  },

  update: function(req,res) {
    res.send('update route');
  },

  destroy: function(req,res) {
    res.send('destroy route')
  },

  show: function(req,res){
    res.send('show route');
  }
};
