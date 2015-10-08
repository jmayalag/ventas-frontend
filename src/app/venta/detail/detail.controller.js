(function () {
  'use strict';

  angular.module('ventas').controller('VentaDetailController', VentaDetailController);

  /** @ngInject */
  function VentaDetailController($routeParams, Venta) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Venta.get({venta_id: id});

    vm.detail_options = {
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
