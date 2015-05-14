'use strict';

describe('Directive: tbEqualHeight', function () {

  // load the directive's module
  beforeEach(module('tbemApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tb-equal-height></tb-equal-height>');
    element = $compile(element)(scope);
//    expect(element.text()).toBe('this is the tbEqualHeight directive');
  }));
});
