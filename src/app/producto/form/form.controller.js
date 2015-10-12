(function () {
  'use strict';

  angular.module('ventas').controller('ProductoFormController', ProductoFormController);

  /** @ngInject */
  function ProductoFormController(Producto, Proveedor) {
    var vm = this;
    vm.entity = new Producto(); //si no hay save callback, se debe pasar el Resource
    vm.proveedores = Proveedor.all();

    vm.selectProveedor = function (p) {
      vm.entity.proveedor = {id: p ? p.id : null};
    };

    vm.form_options = {
      title: 'Crear Producto',
      previous: '/productos',
      successPrefix: '/productos/',
      fields: {
        nombre: 'Nombre',
        cantidad: 'Cantidad',
        precio_unitario: 'Precio'
      }
    };
  }
})();
