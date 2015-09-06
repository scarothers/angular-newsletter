var app = angular.module('newsletterPreview', []);

app.controller('StoriesController', function ($scope, $http){
	callurl = 'http://0.0.0.0:15000'
	$http.get(callurl)
	$http.get('data.json')
	.then(function(res){
		$scope.stories = res.data;
	})
		$scope.highlightStory = function(){
		angular.element('$index').addClass("hover-newsletter")
	}

});
