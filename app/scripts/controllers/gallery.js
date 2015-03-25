'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
