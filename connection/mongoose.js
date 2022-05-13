const mongoose = require("mongoose");
require("dotenv").config();

// mongoose.connect(process.env.mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
module.exports = async () => {
  try {
    await mongoose.connect(process.env.mongoURI)
  }
  catch(err) {
    console.log(err);
  }
}
// mongoose.connection.on("connected", () => {
//   console.info("MongoDB connected Successfully!!");
// });
// mongoose.connection.on("error", err => {
//   console.error(`Error in mongoose connection: ${err.message}`);
// });


// mongoose.connection.on("disconnected", () => {
//   console.info("Mongoose connection is disconnected");
// });

// process.on("SIGINT", function () {
//   mongoose.connection.close(() => {
//     process.exit(0);
//   });
