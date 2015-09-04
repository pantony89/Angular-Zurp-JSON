var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://jsonplaceholder.typicode.com/users")
  .success(function (response) {$scope.names = response;});
  
  $scope.go = function(row){
	$scope.selectedRow = row;
  }
  

});
