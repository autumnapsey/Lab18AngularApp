var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/fizzbuzz', {
		templateUrl: 'fizzbuzz.html',
		controller: 'fizzcontrol'
	})
	.when('/API', {
		templateUrl: 'api.html',
		controller: 'apicontrol'
	});
});