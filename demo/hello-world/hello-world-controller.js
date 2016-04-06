/**
 * The one and only controller used in this app.
 */
'use strict';

class HelloWorldController {
  constructor($scope){
    $scope.name = 'Person';
  }
}

register('demoApp').controller('HelloWorldController', ['$scope', HelloWorldController ]);
