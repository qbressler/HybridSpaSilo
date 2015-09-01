var customerApp = angular.module("customer", ['ngRoute']);

var configFunction = function ($routeProvider) {
    $routeProvider.when('/customerList', {
        templateUrl: '/App/Customer/Views/customerList.html'
    })
    .when('/customerAnotherLink', {
        templateUrl: '/App/Customer/Views/customerAnotherLink.html'
    })
    .otherwise({
        redirectTo: '/customerList'
    });
}

configFunction.$inject = ['$routeProvider'];
customerApp.config(configFunction);