module.exports = {
  index: function(req, res){
    var cdesr = [
                  {
                    name: 'Ren Cheng',
                    hobby: 'Ping Pong!',
                    img: ''
                  },
                  {
                    name: 'Dylan',
                    hobby: 'Pokemon GO!',
                    img: ''
                  },
                  {
                    name: 'Chris Ong',
                    hobby: 'Basketball!',
                    img: ''
                  },
                  {
                    name: 'Sebastian',
                    hobby: 'Archery!',
                    img: ''
                  },
                  {
                    name: 'Edison',
                    hobby: 'KDrama!',
                    img: ''
                  }

                ];

    res.json(cdesr);

  }
};
