var express = require('express');
var router = express.Router();
const userController = require("../controller/index");

router.get("/", function (req, res, next) {
  res.render('profile');
});

router.post("/", function (req, res) {
  var userProfile = new Users({
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    dob: req.body.dob,
    phone: req.body.phone,
  });
  
  userProfile.save();
  res.redirect('/info');
});

router.get("/allinfo", userController.getProfiles);
router.get("/bdayinfo", userController.getAllbday);
router.get("/fullname/:id", userController.getFullName);
router.get("/bdaytoday/:userId", userController.todayBday);

module.exports = router;