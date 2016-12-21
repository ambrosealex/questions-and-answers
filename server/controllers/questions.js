var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
  index: function(req, res) {
      Question.find({}).populate('answers').exec( function (err, questions) {
          console.log(questions);
          res.json({ questions: questions });
    })
  },
  create: function(req, res) {
      var question = new Question({
          question: req.body.question,
          description: req.body.description
      });
      question.save(function (err){
          if(err){
              console.log(err);
          } else {
              console.log("Successfully Saved:", question);
          }
          res.json({ question: question })
      })
  },
  getOneById: function(req, res) {
      console.log("PARAMS ID:", req.params.id);
      Question.find({_id: req.params.id}).populate('answers').exec( function(err, question) {
          res.json({question:question});
      })
  }
}
