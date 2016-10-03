'use strict';

describe('Controller: Tarea3Ctrl', function () {

  // load the controller's module
  beforeEach(module('succesfulstudentApp'));

  var Tarea3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Tarea3Ctrl = $controller('Tarea3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Tarea3Ctrl.awesomeThings.length).toBe(3);
  });
});
