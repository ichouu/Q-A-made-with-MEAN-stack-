questions.controller('homesController', function($scope, $routeParams, homeFactory){
  homeFactory.getQuestions(function(data){
  $scope.questions = data;
  });
});
