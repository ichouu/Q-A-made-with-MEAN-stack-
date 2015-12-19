questions.factory('answerFactory', function($http){
	var factory = {};
	var answers = [];
	factory.getAnswers = function(id, callback){
    console.log("answers2")
		$http.get('/get_answers/'+id).success(function(output){
      console.log("answers3")
			answers = output;
			callback(answers[0]);
		});
	};
	factory.likeAnswer = function(id, callback){
		console.log(id);
		$http.get('/like_answer/'+id).success(function(output){
			console.log(output);
		});
	};
	return factory;
});
