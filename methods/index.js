const userSchema  = require('../schema/index');
const moment = require("moment");
userSchema.methods.getIfBday = function (req, res) {
  var today = new Date();
  var a = String(today.getDate());
  var b = String(today.getMonth() + 1);
  if (b < 10) {
    return "0" + b
  }
  const regex = new RegExp(a + "[-/]" + b + "[-/][0-9]{4}");
  return regex.test(this.dob);
  }
userSchema.virtual("fullName").get(function () {
  return this.fname + " " + this.lname;
});