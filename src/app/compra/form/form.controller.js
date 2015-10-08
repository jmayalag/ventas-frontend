(function () {
  'use strict';

  angular.module('ventas').controller('CompraFormController', CompraFormController);

  /** @ngInject */
  function CompraFormController($scope, Compra, Proveedor, Producto) {
    $scope.entity = new Compra(); //si no hay save callback, se debe pasar el Resource
    $scope.entity.fecha = new Date();
    $scope.form_options = {
      title: 'Crear Compra',
      previous: '/compras',
      successPrefix: '/compras/'
    };

    $scope.proveedores = Proveedor.all();

    $scope.selectProveedor = function (p) {
      $scope.entity.proveedor = {id: p ? p.id : null}
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
