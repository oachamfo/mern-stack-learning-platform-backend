//import Mongoose db
const mongoose = require("mongoose");

//create Schema
const answerSchema = new mongoose.Schema(
  {
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

//create model based on Schema
const Answer = mongoose.model("Answer", answerSchema);

//export model
module.exports = Answer;
