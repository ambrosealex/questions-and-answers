// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var AnswerSchema = new mongoose.Schema({
  answer: String,
  details: String,
  creator: String,
  votes: Number,
  _question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true})
// register the schema as a model
var Answer = mongoose.model('Answer', AnswerSchema);
