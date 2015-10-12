(function () {
  'use strict';

  angular.module('ventas').controller('VentaFormController', VentaFormController);

  /** @ngInject */
  function VentaFormController($log, Venta, Cliente, Producto) {
    var vm = this;
    vm.entity = new Venta(); //si no hay save callback, se debe pasar el Resource
    vm.entity.fecha = new Date();
    vm.form_options = {
      title: 'Crear Venta',
      previous: '/ventas',
      successPrefix: '/ventas/'
    };

    vm.clientes = [];
    Cliente.all(function (clientes) {
      angular.forEach(clientes, function (v) {
        vm.clientes.push({id: v.id, nombre: v.nombre + " " + v.apellidos});
      });
    });

    vm.selectCliente = function (p) {
      vm.entity.cliente = {id: p ? p.id : null};
    };

    vm.productos = Producto.all();

    vm.selectProducto = function (producto, arrItem) {
      $log.debug(producto);
      arrItem.producto = {id: producto ? producto.id : null};
    };

    vm.entity.detalles = [{}];

    vm.addDetalle = function () {
      vm.entity.detalles.push({});
    };

    vm.deleteDetalle = function (d) {
      var index = vm.entity.detalles.indexOf(d);
      if (index !== -1) {
        vm.entity.detalles.splice(index, 1);
      }
    };
  }
})();
