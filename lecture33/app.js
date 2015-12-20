var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '1111'
    }
    
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ' ' + person.state + ' ' + person.zip;
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);


myApp.directive("searchResult", function() {
    
   return {
       // C = Class
       // M = Comment
       // E = Element
       // A = Attribute
       restrict: 'AE',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
           // & means function
           // = sign means Two Way Binding for Object
           //   changes in directive affect main object
           // @ sign means Text - One Way Binding
       }
   } 
    
});






