(function () {
  'use strict';

  angular.module('ventas').controller('CompraController', CompraController);

  /** @ngInject */
  function CompraController($scope, $location, Compra) {
    $scope.options = {
      column_defs: {
        id: 'ID',
        fecha: 'Fecha',
        monto_total: 'Total',
        proveedor: 'Proveedor'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/compras/' + i.id;
        $location.path(path);
      }
    };
  }
})();
