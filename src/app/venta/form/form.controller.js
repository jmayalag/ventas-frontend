(function () {
  'use strict';

  angular.module('ventas').controller('VentaFormController', VentaFormController);

  /** @ngInject */
  function VentaFormController($scope, Venta, Cliente, Producto) {
    $scope.entity = new Venta(); //si no hay save callback, se debe pasar el Resource
    $scope.entity.fecha = new Date();
    $scope.form_options = {
      title: 'Crear Venta',
      previous: '/ventas',
      successPrefix: '/ventas/'
    };

    //$scope.clientes = Cliente.all();
    $scope.clientes = [];
    Cliente.all(function (clientes) {
      angular.forEach(clientes, function (v) {
        $scope.clientes.push({id: v.id, nombre: v.nombre + " " + v.apellidos});
      });
    });

    $scope.selectCliente = function (p) {
      $scope.entity.cliente = {id: p ? p.id : null}
    };

    $scope.productos = Producto.all();

    $scope.selectProducto = function (producto, arrItem) {
      console.log(producto);
      arrItem.producto = {id: producto ? producto.id : null};
    };

    $scope.entity.detalles = [{}];

    $scope.addDetalle = function () {
      console.log("add");
      $scope.entity.detalles.push({});
    };

    $scope.deleteDetalle = function (d) {
      console.log("del");
      var index = $scope.entity.detalles.indexOf(d);
      if (index != -1) {
        $scope.entity.detalles.splice(index, 1);
      }
    };
  }
})();
