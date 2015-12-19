questions.factory('new_answerFactory', function($http,$location){
	var factory = {};
	var errors = {message: ''};
	var question;
	factory.getQuestion = function(id, callback){
		$http.get('/get_question/'+id).success(function(output){
			question = output;
			callback(question[0]);
		});
	};
	factory.addAnswer = function(id, info){
		var answer = info.answer;
		if(answer.length < 6) {
			errors.message = "Answer must be at least 5 characters";
			$window.location.href = '/new_answer.html';
			//return false;
		} else {
			info.id = id;
			info.name = person;
			$http.post('/add_answer', info).success(function(output){
				console.log(output);
			});
			errors.message = '';
		}
	};
	factory.getErrors = function(){
		return errors;
	};
	return factory;
});
