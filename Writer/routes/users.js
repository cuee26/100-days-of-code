var express = require('express');
var router = express.Router();

const userRoutes = {
  all: function (req, res) {
    res.send('All users')
  },
  viewOne: function (req, res) {
    res.send('Viewing ' + req.params.id);
  },
  create: function (req, res) {
    res.send('User created')
  },
  destroy: function (req, res) {
    console.log('User deleted')
  },
  edit: function (req, res) {
    console.log('User ' + req.params.id + ' updated')
  },
}

router.get('/', userRoutes.all);
router.post('/create', userRoutes.create);
router.post('/destroy/:id', userRoutes.destroy);
router.post('/edit/:id', userRoutes.edit);

module.exports = router;




