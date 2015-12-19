questions.controller('new_answerController', function($scope, $routeParams, $location, new_answerFactory){
	new_answerFactory.getQuestion($routeParams.id, function(data){
		$scope.question = data;
	});
	$scope.addAnswer = function(id){
		new_answerFactory.addAnswer(id, $scope.new_answer);
		$location.path('/question/'+id);
	};
	$scope.errors = new_answerFactory.getErrors();
});
