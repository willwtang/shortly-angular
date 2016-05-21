var links = angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
});
