var app = angular.module('app');



app.controller('apicontrol', function(apiService){
	var http = this;
	apiService.then(function(weather){
	//	console.log(weather.data.query.results.channel.location.city);
		http.place =  weather.data.query.results.channel;
		console.log(http.place);

	});



});