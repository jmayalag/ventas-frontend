(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorDetailController', ProveedorDetailController);

  /** @ngInject */
  function ProveedorDetailController($scope, $routeParams, Proveedor) {
    var id = $routeParams.id;
    $scope.proveedor = Proveedor.get({prov_id: id});

    $scope.detail_options = {
      title_field: 'nombre',
      previous: '/proveedores',
      editPath: '/proveedores/' + id + '/update'
    };
  }
})();
