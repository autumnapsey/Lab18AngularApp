var app = angular.module('app');

app.factory('apiService', function($http){
	return $http.get('https://simple-weather.p.mashape.com/weatherdata?lat=42.3&lng=-83.0', {
		headers: {
			'X-Mashape-Key': '846AvCdlVFmshEUJYk0HM2YvhPcUp1DI3bKjsnM7ll3x52E8AD'
		}
	});

});