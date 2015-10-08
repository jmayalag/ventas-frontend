(function () {
  'use strict';

  angular.module('ventas').controller('CompraFormController', CompraFormController);

  /** @ngInject */
  function CompraFormController($filter, Compra, Proveedor, Producto) {
    var vm = this;
    vm.entity = new Compra(); //si no hay save callback, se debe pasar el Resource
    vm.entity.fecha = new Date();
    var allProducts = Producto.all(function (data) {
      return data;
    });

    //vm.productos = [];

    vm.form_options = {
      title: 'Crear Compra',
      previous: '/compras',
      successPrefix: '/compras/'
    };

    vm.proveedores = Proveedor.all();

    vm.selectProveedor = function (p) {
      vm.entity.proveedor = {id: p ? p.id : null}
      vm.entity.detalles = [{}];
      //console.log(allProducts);
      vm.productos = p ? $filter('filter')(allProducts, {proveedor: {id: p.id}}) : [];
    };

    vm.selectProducto = function (producto, arrItem) {
      console.log(producto);
      arrItem.producto = {id: producto ? producto.id : null};
    };

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
