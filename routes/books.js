var express = require('express');
var router = express.Router();
router.post('/add', function (req, res, next) {
  console.info(req.body);
  res.status(200).json(req.body);
});

router.get('/add', function (req, res, next) {
  res.render('adding');
});

router.get('/find/:id', function (req, res, next) {
  const { id } = req.params;
  console.info(id);
  res.status(200).json(req.params);
});
module.exports = router;
