'use strict';

describe('Controller: Tarea5Ctrl', function () {

  // load the controller's module
  beforeEach(module('succesfulstudentApp'));

  var Tarea5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Tarea5Ctrl = $controller('Tarea5Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Tarea5Ctrl.awesomeThings.length).toBe(3);
  });
});
