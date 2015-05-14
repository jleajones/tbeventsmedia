'use strict';

/**
 * @ngdoc directive
 * @name tbemApp.directive:tbStalker
 * @description
 * # tbStalker
 */
angular.module('tbemApp')
  .directive('tbStalker', function ($window) {

    var windowEl = angular.element($window);

    function getYOffset() {
      return (angular.isDefined(windowEl[0].pageYOffset) ? windowEl[0].pageYOffset : windowEl[0].documentElement.scrollTop);
    }

    function stalking() {
      return (getYOffset() > 215);
    }

    return {
      templateUrl: 'views/tbstalker.html',
      restrict: 'EA',
      replace: true,
      link: function postLink($scope, elem) {
        
          windowEl.on('scroll', function(){
            if(!stalking() && elem.hasClass('stalk-in')){            
              elem.removeClass('stalk-in');
              elem.addClass('stalk-out');
            } else if(stalking() && !elem.hasClass('stalk-in')){
              elem.removeClass('stalk-out');
              elem.addClass('stalk-in');
            }
          });
      }
    };
  });