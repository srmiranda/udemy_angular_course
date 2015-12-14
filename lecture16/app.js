var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $log.info($scope);
    
}]);

// Minified Version of Above
// myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);