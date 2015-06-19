var app = angular.module('newsletterPreview', []);

app.controller('StoriesController', function ($scope, $http){
	$http.get('sample-data.json')
	.then(function(res){
		$scope.stories = res.data;
	})
});

// Test live data again 
// This is the working local copy: 'sample-data.json'
