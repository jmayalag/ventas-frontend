(function () {
  'use strict';

  angular.module('ventas').controller('VentaDetailController', VentaDetailController);

  /** @ngInject */
  function VentaDetailController($scope, $routeParams, Venta) {
    var id = $routeParams.id;
    $scope.entity = Venta.get({venta_id: id});

    $scope.detail_options = {
      title: 'Venta #' + id,
      previous: '/ventas',
      fields: {
        id: 'ID',
        fecha: 'Fecha',
        monto_total: 'Total'
      },
      readOnly: true
    };
  }
})();
