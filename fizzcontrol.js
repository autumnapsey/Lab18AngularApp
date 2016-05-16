var app = angular.module('app');

app.controller('fizzcontrol', function($scope, fizzService){
	$scope.fizzBuzz = function(number){

		$scope.fizzOrBuzz = fizzService.evaluateNumber(number);

	};
});