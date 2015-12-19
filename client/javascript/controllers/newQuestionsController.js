questions.controller('newQuestionsController', function($scope, $location, newQuestionFactory){
	$scope.addQuestion = function(){
		var new_question = [];
    console.log('1');
		newQuestionFactory.addQuestion($scope.new_question);
		$location.path('/');
    $scope.new_question = {};
	};
	$scope.errors = newQuestionFactory.getErrors();
});
