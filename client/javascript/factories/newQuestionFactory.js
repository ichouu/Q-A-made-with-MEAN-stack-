questions.factory('newQuestionFactory', function($http,$location){
	var factory = {};
	var errors = {message: ''};
	factory.addQuestion = function(info){
		var question = info.question;
		if(question.length < 11) {
			errors.message = 'Not a vaild question, must be at least 10 characters long';
			console.log('am i here');
			$location.path('#/new_question');
			//return false;
		} else {
			console.log('2');
			info.name = person;
			$http.post('/add_question', info).success(function(output){
				output = output.replace(/"/g, "");
				questions_array.push({
					_id: output,
					question: info.question,
					details: info.details,
					created_at: Date.now()
				});
			});
			errors.message = '';
			// success_message = true;
		}
	};
	factory.getErrors = function(){
		return errors;
	};
	return factory;
});
