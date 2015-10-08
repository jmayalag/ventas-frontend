(function () {
  'use strict';

  angular.module('ventas').controller('CompraDetailController', CompraDetailController);

  /** @ngInject */
  function CompraDetailController($routeParams, Compra) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Compra.get({compra_id: id});

    vm.detail_options = {
      title: 'Compra #' + id,
      previous: '/compras',
      fields: {
        id: 'ID',
        fecha: 'Fecha',
        monto_total: 'Total'
      },
      readOnly: true,
    };
  }
})();
