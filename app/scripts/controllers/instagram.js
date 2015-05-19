'use strict';

/**
 * @ngdoc function
 * @name tbemApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the tbemApp
 */
angular.module('tbemApp')
  .controller('InstagramCtrl', function ($scope, instagram) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $scope.photos = [];
    instagram.fetchPhotos(function(data){
      $scope.photos = data;
      console.log(data);
    });

  });
