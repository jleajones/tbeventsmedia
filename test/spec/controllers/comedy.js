'use strict';

describe('Controller: ComedyCtrl', function () {

  // load the controller's module
  beforeEach(module('tbemApp'));

  var ComedyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComedyCtrl = $controller('ComedyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
