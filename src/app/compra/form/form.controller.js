(function () {
  'use strict';

  angular.module('ventas').controller('CompraFormController', CompraFormController);

  /** @ngInject */
  function CompraFormController(Compra, Proveedor, Producto) {
    var vm = this;
    vm.entity = new Compra(); //si no hay save callback, se debe pasar el Resource
    vm.entity.fecha = new Date();
    vm.form_options = {
      title: 'Crear Compra',
      previous: '/compras',
      successPrefix: '/compras/'
    };

    vm.proveedores = Proveedor.all();

    vm.selectProveedor = function (p) {
      vm.entity.proveedor = {id: p ? p.id : null}
    };

    vm.productos = Producto.all();

    vm.selectProducto = function (producto, arrItem) {
      console.log(producto);
      arrItem.producto = {id: producto ? producto.id : null};
    };

    vm.entity.detalles = [{}];

    vm.addDetalle = function () {
      console.log("add");
      vm.entity.detalles.push({});
    };

    vm.deleteDetalle = function (d) {
      console.log("del");
      var index = vm.entity.detalles.indexOf(d);
      if (index != -1) {
        vm.entity.detalles.splice(index, 1);
      }
    };
  }
})();
