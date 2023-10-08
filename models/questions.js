//import Mongoose db
const mongoose = require("mongoose");

//create Schema
const questionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    question: { type: String, required: true },
  },
  { timestamps: true }
);

//create model based on Schema
const Question = mongoose.model("Question", QuestionSchema);

//export model
module.exports = Question;
