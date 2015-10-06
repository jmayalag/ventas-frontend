(function () {
  'use strict';

  angular.module('ventas').controller('ProductoFormEditController', ProductoFormEditController);

  /** @ngInject */
  function ProductoFormEditController($scope, $routeParams, Producto, Proveedor) {
    var id = $routeParams.id;
    $scope.entity = Producto.get({prod_id: id});
    $scope.proveedores = Proveedor.all();

    $scope.selectProveedor = function (p) {
      console.log(p);
      $scope.entity.proveedor = {id: p.id}
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
        //proveedor: 'Proveedor'
      }
    };
  }
})();
