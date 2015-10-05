(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorController', ProveedorController);

  /** @ngInject */
  function ProveedorController($scope, $location, Proveedor) {
    $scope.options = {
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'Email'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/proveedores/' + i.id;
        $location.path(path);
      }
    };
  }
})();
