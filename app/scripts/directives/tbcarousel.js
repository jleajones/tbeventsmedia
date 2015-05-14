'use strict';

/**
 * @ngdoc directive
 * @name tbemApp.directive:tbCarousel
 * @description
 * # tbCarousel
 */
angular.module('tbemApp')
  .directive('tbCarousel', function () {
    return {
      templateUrl: 'views/tbcarousel.html',
      restrict: 'EA',
			replace: true,
			scope: {
				items: '=tbCarouselItems'
			},
      link: function postLink() {
        
      }
    };
  });
