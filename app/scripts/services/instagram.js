'use strict';

/**
 * @ngdoc service
 * @name tbemApp.instagram
 * @description
 * # instagram
 * Factory in the tbemApp.
 */
angular.module('tbemApp')
  .factory('instagram', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var endPoint = 'https://api.instagram.com/v1/users/187066248/media/recent/?client_id=3cba3e3c84434ee7a1a1704f25d8902f&callback=JSON_CALLBACK';

    // Public API here
    return {
      fetchPhotos: function (callback) {
        $http.jsonp(endPoint).success(function (response) {
          callback(response.data);
        });
      },
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });