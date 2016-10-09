'use strict';

describe('Controller: Tarea6Ctrl', function () {

  // load the controller's module
  beforeEach(module('succesfulstudentApp'));

  var Tarea6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Tarea6Ctrl = $controller('Tarea6Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Tarea6Ctrl.awesomeThings.length).toBe(3);
  });
});
