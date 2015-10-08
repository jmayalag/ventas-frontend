(function () {
  'use strict';

  angular.module('ventas').controller('ProductoDetailController', ProductoDetailController);

  /** @ngInject */
  function ProductoDetailController($routeParams, Producto) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Producto.get({prod_id: id});

    vm.detail_options = {
      title_field: 'nombre',
      previous: '/productos',
      editPath: '/productos/' + id + '/update',
      fields: {
        id: 'ID',
        nombre: 'Nombre',
        cantidad: 'Cantidad',
        precio_unitario: 'Precio'
      }
    };
  }
})();
