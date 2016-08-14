module.exports = {
  index: function(req, res) {
    res.json({
        name: 'Chris Ong',
        hobby: 'Basketball',
        img: ''
      },

      {
        name: 'Dylan',
        hobby: 'Pokemon',
        img: ''
      },

      {
        name: 'Edison',
        hobby: 'Korean Drama',
        img: ''
      },

      {
        name: 'Sebastian',
        hobby: 'Archery',
        img: ''
      },

      {
        name: 'Rench',
        hobby: 'Read',
        img: ''
      }
    );
  }

}
