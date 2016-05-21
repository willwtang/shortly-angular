angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.url = '';
  $scope.addLink = function() {
    console.log($scope.url);
    Links.addOne($scope.url).then(function() {
      $location.path('/links');
    });
  };

});
