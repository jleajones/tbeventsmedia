'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.master = {};
    
    $scope.submit = function(form){
        if(form.$valid) {
            $scope.submitted = true;
        } else {
            console.log(form);
        }
        
    };
    
    $scope.reset = function(form) {
        if(form) {
            form.$setPristine();
            form.$setUntouched();
        }
        
        $scope.user = angular.copy($scope.master);
    };
	
    $scope.reset();
  });
