var express = require('express');
var router = express.Router();

const userRoutes =  {
  getAllUsers: (req, res) => {
    res.send('GetAllUsers users')
  },
  getUser: (req, res) => {
    res.send('Viewing ' + req.params.id);
  },
  create: (req, res) => {
    res.send('User created')
  },
  delete: (req, res) => {
    console.log('User deleted')
  },
  edit: (req, res) => {
    console.log('User ' + req.params.id + ' updated')
  },
}

router.get('/', userRoutes.getAllUsers);
router.post('/create', userRoutes.create);
router.post('/delete/:id', userRoutes.delete);
router.post('/edit/:id', userRoutes.edit);

module.exports = router;




