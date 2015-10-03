(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorController', ProveedorController);

  /** @ngInject */
  function ProveedorController($scope) {
    $scope.proveedores = [
      {id: 1, nombre: 'Jordan', ci: '4058908'},
      {id: 2, nombre: 'Alma', ci: '4058908'}
    ];
  }
})();
