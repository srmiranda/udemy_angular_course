var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

        $http.get('https://api.myjson.com/bins/4j4zm')
        .success(function (result) {
            
            $scope.rules = result;
        
        })
        .error(function (data, status) {
           
            console.log(data);
            
        });
    
    $scope.newRule = '';
    $scope.addRule = function() {
      
        $http.post('https://api.myjson.com/bins/4j4zm', { newRule: $scope.newRule })
        .success(function (result) {
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error(function (data, status) {
            
            console.log(data);
            
        });
        
    };

}]);


    
