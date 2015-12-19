questions.controller('homesController', function($scope, $routeParams, homeFactory){
  homeFactory.getQuestions(function(data){
  $scope.questions = data;
  });
  $scope.logout = function()
	{
		var person = ""
		window.location.assign("/index.html");
	}
});
