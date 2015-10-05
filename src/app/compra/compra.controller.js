(function () {
  'use strict';

  angular.module('ventas').controller('CompraController', CompraController);

  /** @ngInject */
  function CompraController($scope, $location, Compra) {
    $scope.options = {
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'Email'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/compras/' + i.id;
        $location.path(path);
      }
    };
  }
})();
