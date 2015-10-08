(function () {
  'use strict';

  angular.module('ventas').controller('CompraFormController', CompraFormController);

  /** @ngInject */
  function CompraFormController($scope, Compra, Proveedor) {
    $scope.entity = new Compra(); //si no hay save callback, se debe pasar el Resource
    $scope.form_options = {
      title: 'Crear Compra',
      previous: '/compras',
      successPrefix: '/compras/',
      fields: {
        monto_total: 'Total'
      }
    };

    $scope.proveedores = Proveedor.all();

    $scope.selectProveedor = function (p) {
      $scope.entity.proveedor = {id: p ? p.id : null}
    };

    $scope.productos = Proveedor.all();

    $scope.selectProducto = function (p) {
      $scope.prod = {id: p ? p.id : null}
    };

    $scope.detalles = [];

    $scope.addDetalle = function () {
      console.log("add");
      $scope.detalles.push({});
    };

    $scope.deleteDetalle = function () {
      console.log("del");
      $scope.detalles.pop();
    };
  }
})();
