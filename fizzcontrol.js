var app = angular.module('app');

app.controller('fizzcontrol', function($scope){
	function isDivisibleby(i,y){
	  return i % y === 0;
	}
	function Search(i,y){
	  return i.toString().indexOf(y) !== -1;
	}

	function find(i,y){
	  return (isDivisibleby(i,y) || Search(i,y));
	}

	$scope.fizzBuzz = function(number){

		// var num = parseFloat(number, 10);
		// if(find(num, 3) && find(num, 5)){
		// 	console.log("FizzBuzz");
		// 	return "FizzBuzz";
		
		// }
		// if(find(num, 3)){
		// 	console.log("Fizz");
		// 	return "Fizz";
		
		// }
		// if(find(num, 5)){
		// 	console.log("Buzz");
		// 	return "Buzz";
		
		// }
	}
});