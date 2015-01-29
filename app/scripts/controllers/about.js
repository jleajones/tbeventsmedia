'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
