(function () {
  'use strict';

  angular.module('ventas').controller('CompraController', CompraController);

  /** @ngInject */
  function CompraController($location) {
    var vm = this;
    vm.options = {
      import: 'http://localhost:8080/tareaweb2/rest/compras/upload',
      export: 'Compras',
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
