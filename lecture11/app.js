var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'Shawn';
    $scope.occupation = 'Coder';
    
    $scope.getname = function() {
        return 'Shawn';
    }

    console.log($scope);
});