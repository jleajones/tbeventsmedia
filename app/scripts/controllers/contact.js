'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.master = {};
    
    $scope.submit = function(form) {
        console.log(form);
    };
    
    $scope.reset = function(form) {
        if(form) {
            form.$setPristine();
            form.$setUntouched();
            console.log(form);
        }
        
        $scope.user = angular.copy($scope.master);
    };
    
    $scope.reset();
  });
