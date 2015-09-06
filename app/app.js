import node-server.js

var app = angular.module('newsletterPreview', []);

app.controller('StoriesController', function ($scope, $http){
	$http.get('http://0.0.0.0:1234/')
	$http.get('data.json')
	.then(function(res){
		$scope.stories = res.data;
	})
		$scope.highlightStory = function(){
		angular.element('$index').addClass("hover-newsletter")
	}


});
