const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment=require('moment')


const userSchema = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  dob: {
    type:String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

userSchema.methods.getIfBday = function (req, res) {
  var today = new Date();
  var a = String(today.getDate())
  var b = String(today.getMonth() + 1);
  const regex = new RegExp(a + "[-/]" + b + "[-/][0-9]{4}");
  return regex.test(this.dob);
}
userSchema.virtual("fullName").get(function () {
  return this.fname + " " + this.lname;
});

module.exports = Users = mongoose.model("Users", userSchema);
