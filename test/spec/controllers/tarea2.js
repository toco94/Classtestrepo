'use strict';

describe('Controller: Tarea2Ctrl', function () {

  // load the controller's module
  beforeEach(module('succesfulstudentApp'));

  var Tarea2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Tarea2Ctrl = $controller('Tarea2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Tarea2Ctrl.awesomeThings.length).toBe(3);
  });
});
