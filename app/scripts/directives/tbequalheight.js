'use strict';

/**
 * @ngdoc directive
 * @name tbemApp.directive:tbEqualHeight
 * @description
 * # tbEqualHeight
 */
angular.module('tbemApp')
  .directive('tbEqualHeight', function ($window, $timeout) {
    return {
      restrict: 'EA',
      link: function postLink(scope, element) {

        
        $timeout(function(){
          if (element[0].offsetHeight === element.next()[0].offsetHeight) {
            return;
          } else {
            element.css('height', element.next()[0].offsetHeight + 'px');
          }
        },1000);


        angular.element($window).on('resize', function () {

          if (element[0].offsetHeight === element.next()[0].offsetHeight) {
            return;
          } else {
            element.css('height', element.next()[0].offsetHeight + 'px');
          }
        });
      }
    };
  });