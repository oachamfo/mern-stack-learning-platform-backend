//initialize controller
const express = require("express");
const router = express.Router();
const Answer = require("../models/answers.js");
const Question = require("../models/questions.js");

//answers create
router.post("/:question_id/", async (req, res) => {
  try {
    //data correction
    //store new answer in cloud db
    await Answer.create(req.body)
      .then((docAnswer) => {
        console.log("req.params.question_id: " + req.params.question_id);

        console.log("docAnswer._id: " + docAnswer._id);

        //res.redirect() may be used before the return statement;
        //res.redirect() does not have to be the last statement the callback to the post() method executes
        res.redirect(`/questions/${req.params.question_id}`); //with res.redirect() the backend redirects the frontend to the Show page

        //this return statement is needed for the answers array in the Question object to be updated with the docAnswer._id
        return Question.findByIdAndUpdate(
          req.params.question_id,
          { $push: { answers: docAnswer._id } },
          { new: true, useFindAndModify: false }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}); //closing parenthesis for router.post() method

//export router object
module.exports = router;
