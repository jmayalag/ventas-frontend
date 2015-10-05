(function () {
  'use strict';

  angular.module('ventas').controller('VentaController', VentaController);

  /** @ngInject */
  function VentaController($scope, $location, Venta) {
    $scope.options = {
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'Email'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/ventas/' + i.id;
        $location.path(path);
      }
    };
  }
})();
