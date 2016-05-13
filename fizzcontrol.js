var app = angular.module('app');

app.controller('fizzcontrol', function($scope, fizzService){
	$scope.fizzBuzz = function(number){
		console.log('function is firing.');

		fizzService.evaluateNumber(number);

	};
});