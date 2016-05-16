var app = angular.module('app');

app.controller('fizzcontrol', function($scope, fizzService){
	$scope.fizzBuzz = function(number){
		console.log('function is firing.');

		$scope.fizzOrBuzz = fizzService.evaluateNumber(number);

	};
});