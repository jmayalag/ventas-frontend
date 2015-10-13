(function () {
  'use strict';

  angular.module('ventas').controller('VentaController', VentaController);

  /** @ngInject */
  function VentaController($location) {
    var vm = this;
    vm.options = {
      import: 'http://localhost:8080/tareaweb2/rest/ventas/upload',
      export: 'Ventas',
      column_defs: {
        id: 'ID',
        fecha: 'Fecha',
        monto_total: 'Total',
        cliente: 'Cliente'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/ventas/' + i.id;
        $location.path(path);
      }
    };
  }
})();
