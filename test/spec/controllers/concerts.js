'use strict';

describe('Controller: ConcertsCtrl', function () {

  // load the controller's module
  beforeEach(module('tbemApp'));

  var ConcertsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConcertsCtrl = $controller('ConcertsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
