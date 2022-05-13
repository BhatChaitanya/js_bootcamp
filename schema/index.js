const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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


module.exports = Users = mongoose.model("Users", userSchema);
