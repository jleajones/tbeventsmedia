'use strict';

describe('Directive: tbCarousel', function () {

  // load the directive's module
  beforeEach(module('tbemApp'));
  beforeEach(module('views/tbcarousel.html'));

  var element,
      scope,
      isoScope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
		scope.testItems = [{
			'name': 'Artist Uno',
			'imageUrl': 'images/david_guetta.jpg',
			'aId': 1
		},{
			'name': 'Artist Duex',
			'imageUrl': 'images/david_guetta.jpg',
			'aId': 2
		}];
  }));

  it('it should attach items to the isolate scope', inject(function ($compile) {
    element = angular.element('<tb-carousel tb-carousel-items="testItems"></tb-carousel>');
    element = $compile(element)(scope);
    scope.$digest();
    
		isoScope = element.isolateScope();
		
    expect(isoScope.items).toBe(scope.testItems);
    expect(isoScope.items.length).toBe(2);
  }));
  
  it('it should have a class tb-carousel', inject(function ($compile) {
    element = angular.element('<tb-carousel tb-carousel-items="testItems"></tb-carousel>');
    element = $compile(element)(scope);
    scope.$digest();
    
    expect(element.hasClass('tb-carousel')).toBe(true);
  }));
  
  it('it should have a 2 button', inject(function ($compile) {
    element = angular.element('<tb-carousel tb-carousel-items="testItems"></tb-carousel>');
    element = $compile(element)(scope);
    scope.$digest();
    
    expect(element.find('button').length).toBe(2);
  }));
});
