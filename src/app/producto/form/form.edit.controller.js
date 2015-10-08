(function () {
  'use strict';

  angular.module('ventas').controller('ProductoFormEditController', ProductoFormEditController);

  /** @ngInject */
  function ProductoFormEditController($routeParams, Producto, Proveedor) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Producto.get({prod_id: id});
    vm.proveedores = Proveedor.all();
    vm.selected = {};

    vm.entity.$promise.then(function (d) {
      console.log(d.proveedor.nombre);
      vm.selected = d.proveedor;
    });

    vm.selectProveedor = function (p) {
      console.log(p);
      vm.entity.proveedor = {id: p ? p.id : null}
    };

    vm.form_options = {
      title: 'Modificar Producto',
      edit: 'true',
      previous: '/productos/' + id,
      successPrefix: '/productos/',
      fields: {
        nombre: 'Nombre',
        cantidad: 'Cantidad',
        precio_unitario: 'Precio'
      }
    };
  }
})();
