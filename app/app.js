var app = angular.module('newsletterPreview', []);

app.controller('StoriesController', function ($scope, $http){
	callurl = 'http://52.26.239.23:5000/'
	$http.get(callurl)
	$http.get('data.json')
	.then(function(res){
		$scope.stories = res.data;
	})
		$scope.highlightStory = function(){
		angular.element('$index').addClass("hover-newsletter")
	}

});
