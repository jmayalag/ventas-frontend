(function () {
  'use strict';

  angular.module('ventas').controller('ProductoController', ProductoController);

  /** @ngInject */
  function ProductoController($scope, $location, Producto) {
    $scope.options = {
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'Email'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/productos/' + i.id;
        $location.path(path);
      }
    };
  }
})();
