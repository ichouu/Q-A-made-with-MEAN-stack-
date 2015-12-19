var questions = angular.module('questions', ['ngRoute']);
questions.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'homesController'
	})
	 .when('/new_question', {
 	 templateUrl: 'partials/new_question.html',
	 })
	.when('/question/:id', {
		templateUrl: 'partials/answer.html',
		controller: 'answersController'
	})
	.when('/question/:id/new_answer', {
		templateUrl: 'partials/new_answer.html',
		controller: 'new_answerController'
	})
  .otherwise ({
    redirectTo: '/'
  });
});
