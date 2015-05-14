'use strict';

/**
 * @ngdoc overview
 * @name tbemApp
 * @description
 * # tbemApp
 *
 * Main module of the application.
 */
angular
  .module('tbemApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/services', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .when('/entertainment/comedy', {
        templateUrl: 'views/comedy.html',
        controller: 'ComedyCtrl'
      })
      .when('/entertainment/sports', {
        templateUrl: 'views/sports.html',
        controller: 'SportsCtrl'
      })
      .when('/entertainment/concerts', {
        templateUrl: 'views/concerts.html',
        controller: 'ConcertsCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/services/marketing', {
        templateUrl: 'views/marketing.html',
        controller: 'MarketingCtrl'
      })
      .when('/services/event-planning', {
        templateUrl: 'views/eventplanning.html',
        controller: 'EventplanningCtrl'
      })
      .when('/services/booking', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl'
      })
      .when('/entertainment', {
        templateUrl: 'views/entertainment.html',
        controller: 'EntertainmentCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });