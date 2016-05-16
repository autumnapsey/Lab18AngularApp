var app = angular.module('app');

app.factory('fizzService', function(){
	var isItFizzBuzz = {};
	
	var isDivisibleby = function(i,y){
	  return i % y === 0;
	}

	var Search = function(i,y){
	  return i.toString().indexOf(y) !== -1;
	}

	var find = function(i,y){
	  return (isDivisibleby(i,y) || Search(i,y));
	}

	return {
		evaluateNumber: function(number){
			var num = parseFloat(number, 10);
			if(find(num, 3) && find(num, 5)){
				console.log("FizzBuzz");
				isItFizzBuzz = "FizzBuzz";
				return isItFizzBuzz;
			
			}
			if(find(num, 3)){
				console.log("Fizz");
				isItFizzBuzz = "Fizz";
				return isItFizzBuzz;

			}
			if(find(num, 5)){
				console.log("Buzz");
				isItFizzBuzz = "Buzz";
				return isItFizzBuzz;

			}
			else{
				console.log(num);
				return num;
			}

		},
	};
});