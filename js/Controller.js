var App = angular.module('myApp', []);

App.controller('Ctrl', function($scope, $http) {
	
  $http.get('http://jsonplaceholder.typicode.com/users')
       .then(function(res){
          $scope.todos = res.data;                
        });
		
		
});


