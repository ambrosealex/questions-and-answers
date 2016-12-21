// here we load the Poll and User model
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var questions = require('../controllers/questions.js');
var Answer = mongoose.model('Answer');
var answers = require('../controllers/answers.js');

module.exports = function(app) {
    app.post("/createQuestion", questions.create);
    app.get("/questions", questions.index);
    app.get("/question/:id", questions.getOneById);
    app.post("/createAnswer", answers.create);
    app.get('/answers', answers.index)
}
