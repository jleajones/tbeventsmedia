'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('EventsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
