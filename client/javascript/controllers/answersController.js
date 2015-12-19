questions.controller('answersController', function($scope, $routeParams, answerFactory){
	answerFactory.getAnswers($routeParams.id, function(data){
		$scope.answers = data;
	});
	$scope.likeAnswer = function(id){
		answerFactory.likeAnswer(id);
	};
});
