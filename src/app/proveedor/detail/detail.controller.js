(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorDetailController', ProveedorDetailController);

  /** @ngInject */
  function ProveedorDetailController($scope, $routeParams, Proveedor) {
    $scope.id = $routeParams.id;
    $scope.proveedor = Proveedor.get({prov_id: $scope.id});

    $scope.detail_options = {
      title_field: 'nombre',
      previous: '#/proveedores'
    };
  }
})();
