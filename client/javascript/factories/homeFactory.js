questions.factory('homeFactory', function($http){
	var factory = {};
	factory.getQuestions = function(callback){
		console.log('home2');
		$http.get('/get_questions').success(function(output){
			console.log('home3');
			questions_array = output;
			callback(questions_array);
		});
	};
	return factory;
});
