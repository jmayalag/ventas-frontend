(function () {
  'use strict';

  angular.module('ventas').controller('ProductoFormEditController', ProductoFormEditController);

  /** @ngInject */
  function ProductoFormEditController($scope, $routeParams, Producto, Proveedor) {
    var id = $routeParams.id;
    $scope.entity = Producto.get({prod_id: id});
    $scope.proveedores = Proveedor.all();
    $scope.selected = {};

    $scope.entity.$promise.then(function (d) {
      console.log(d.proveedor.nombre);
      $scope.selected = d.proveedor;
    });

    $scope.selectProveedor = function (p) {
      $scope.entity.proveedor = {id: p ? p.id : null}
    };

    $scope.form_options = {
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
