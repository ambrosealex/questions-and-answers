// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var QuestionSchema = new mongoose.Schema({
  question: String,
  description: String,
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true})
// register the schema as a model
var Question = mongoose.model('Question', QuestionSchema);
