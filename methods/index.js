const userSchema  = require('../schema/index');
const moment = require("moment");
userSchema.methods.getIfBday=function(){
  const today = moment().format('DD-MM-YYYY');
  return today == this.dob;
};
userSchema.virtual("fullName").get(function () {
  return this.fname + " " + this.lname;
});