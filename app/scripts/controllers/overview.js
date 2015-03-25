'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('OverviewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
