const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://nitesh0709yadav:nitesh0709yadav@cluster0.qfvekgr.mongodb.net/?retryWrites=true&w=majority`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the db"));

db.once("open", function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
