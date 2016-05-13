var app = angular.module('app');

app.factory('fizzService', function(){
	var isItFizzBuzz;

	return {
		evaluateNumber: function(number){
			var num = parseFloat(number, 10);
			if(find(num, 3) && find(num, 5)){
				console.log("FizzBuzz");
				isItFizzBuzz = "FizzBuzz";
			
			}
			if(find(num, 3)){
				console.log("Fizz");
				isItFizzBuzz = "Fizz";
			
			}
			if(find(num, 5)){
				console.log("Buzz");
				isItFizzBuzz = "Buzz";
			
			}
		},
	};
})