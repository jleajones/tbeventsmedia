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

		//$sopce.topArtists = Talent.query();
	
    $scope.topArtists = [{
			'name': 'Tove Lo',
			'imageUrl': 'images/js/tove_lo.jpg',
			'aId': 1,
      'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio elit, imperdiet id rhoncus id, commodo a augue. Mauris placerat scelerisque auctor.'
		},{
			'name': 'Shy Glizzy',
			'imageUrl': 'images/js/shy_glizzy.jpg',
			'aId': 2,
      'bio': 'Praesent fringilla, sapien eu rutrum fermentum, risus nulla tempor dolor, sed maximus ex turpis vel eros. Nullam sit amet facilisis urna.'
		},{
			'name': 'Draya',
			'imageUrl': 'images/js/draya.jpg',
			'aId': 3,
      'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio elit, imperdiet id rhoncus id, commodo a augue. Mauris placerat scelerisque auctor.'
		},{
			'name': 'Gary Owens',
			'imageUrl': 'images/js/gary_owens.jpg',
			'aId': 4,
      'bio': 'Praesent fringilla, sapien eu rutrum fermentum, risus nulla tempor dolor, sed maximus ex turpis vel eros. Nullam sit amet facilisis urna.'
		},{
			'name': 'David Guetta',
			'imageUrl': 'images/js/david_guetta.jpg',
			'aId': 5,
      'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio elit, imperdiet id rhoncus id, commodo a augue. Mauris placerat scelerisque auctor.'
		}];
	
  });
