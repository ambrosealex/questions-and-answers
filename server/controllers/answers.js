var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
  index: function(req, res) {
      Answer.find({}).populate('_question').exec( function (err, answers) {
          res.json({ answers: answers });
      })
  },
  create: function(req, res) {
      console.log("REQ.BODY:", req.body);
      var answer = new Answer({
          answer: req.body.newAnswer.answer,
          details: req.body.newAnswer.details,
          creator: req.body.creator,
          votes: 0,
          _question: req.body.question_id
      });
      answer.save(function (err){
          if(err){
              console.log(err);
          } else {
              console.log("Successfully Saved:", answer);
          }
          Question.update({ _id:req.body.question_id }, {$push : {answers: answer}}, function(err) {
              if(err){
                  console.log(err);
              }
              else {
                  res.json({ answer: answer });
              }
          })
      })
  }
}
