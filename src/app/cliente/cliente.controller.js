(function () {
  'use strict';

  angular.module('ventas').controller('ClienteController', ClienteController);

  /** @ngInject */
  function ClienteController($scope, $location, Cliente) {
    $scope.options = {
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'Email'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/clientes/' + i.id;
        $location.path(path);
      }
    };
  }
})();
