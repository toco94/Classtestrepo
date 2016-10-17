'use strict';

describe('Controller: Tarea7Ctrl', function () {

  // load the controller's module
  beforeEach(module('succesfulstudentApp'));

  var Tarea7Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Tarea7Ctrl = $controller('Tarea7Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Tarea7Ctrl.awesomeThings.length).toBe(3);
  });
});
