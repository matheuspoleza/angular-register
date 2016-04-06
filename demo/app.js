'use strict';

angular.module('demoApp', ['ngRoute'])
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/', {
      templateUrl: 'hello-world/hello-world-template.html',
      controller: 'HelloWorldController'
    });
}]);
