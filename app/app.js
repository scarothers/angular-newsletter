var app = angular.module('newsletterPreview', []);

app.controller('StoriesController', function ($scope, $http){
	callurl = 'https://0.0.0.0:1234'
	$http.get(callurl)
	$http.get('data.json')
	.then(function(res){
		$scope.stories = res.data;
	})
		$scope.highlightStory = function(){
		angular.element('$index').addClass("hover-newsletter")
	}

});
