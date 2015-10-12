(function () {
  'use strict';

  angular.module('ventas').controller('ProductoController', ProductoController);

  /** @ngInject */
  function ProductoController($location) {
    var vm = this;
    vm.options = {
      export: 'Productos',
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        cantidad: 'Cantidad',
        precio_unitario: 'Precio',
        proveedor: 'Proveedor'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/productos/' + i.id;
        $location.path(path);
      }
    };
  }
})();
