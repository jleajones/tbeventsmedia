'use strict';

describe('Controller: EventplanningCtrl', function () {

  // load the controller's module
  beforeEach(module('tbemApp'));

  var EventplanningCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventplanningCtrl = $controller('EventplanningCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
