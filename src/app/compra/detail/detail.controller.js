(function () {
  'use strict';

  angular.module('ventas').controller('CompraDetailController', CompraDetailController);

  /** @ngInject */
  function CompraDetailController($scope, $routeParams, Compra) {
    var id = $routeParams.id;
    $scope.entity = Compra.get({compra_id: id});

    $scope.detail_options = {
      title: 'Compra #' + id,
      previous: '/compras',
      editPath: '/compras/' + id + '/update',
      fields: {
        id: 'ID',
        fecha: 'Fecha',
        monto_total: 'Total'
      }
    };
  }
})();
