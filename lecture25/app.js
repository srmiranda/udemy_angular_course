var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = "I'm the main controller!";
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = "I'm another controller!";
    
}]);
