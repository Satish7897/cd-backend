const mongoose = require("mongoose");
const RequirementSchema = new mongoose.Schema({
  nameOfUser: String,
  codechefRating: Number,
  codeforcesRating: Number,
  codechefUserName: String,
  codeforcesUserName: String,
  StrongerArea: Array,
  minCodechefRating: Number,
  minCodeforcesRating: Number,
  reqArea: Array,
  photoUrl: String,
  date: Date,
});
module.exports = mongoose.model("Requirement", RequirementSchema);
