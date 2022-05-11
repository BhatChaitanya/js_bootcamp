var express = require('express');
var router = express.Router();
// getting login form


router.get('/', function (req, res, next) {
  res.render('login', { title: 'LOGIN FORM' })
});
module.exports = router;