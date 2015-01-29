'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
