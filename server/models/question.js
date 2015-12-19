var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	question: String,
	description: String,
	name: String,
	answers: [{
		answer: String,
		details: String,
		total: {type:Number, default:0},
		name: String,
		likes: {type: Number, default: 0 },
		created_at: {type: Date, default: Date.now }
	}],
	created_at: {type: Date, default: Date.now },
});
mongoose.model('Question', QuestionSchema);
