'use strict';

describe('Directive: tbStalker', function () {

  // load the directive's module
  beforeEach(module('tbemApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tb-stalker></tb-stalker>');
    element = $compile(element)(scope);
    
  }));
});
