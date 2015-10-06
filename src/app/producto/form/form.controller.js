(function () {
  'use strict';

  angular.module('ventas').controller('ProductoFormController', ProductoFormController);

  /** @ngInject */
  function ProductoFormController($scope, Producto, Proveedor) {
    $scope.entity = new Producto(); //si no hay save callback, se debe pasar el Resource
    $scope.proveedores = Proveedor.all();
    $scope.selectProveedor = function (p) {
      console.log(p);
      $scope.entity.proveedor = {id: p.id}
    };

    $scope.form_options = {
      title: 'Crear Producto',
      previous: '/productos',
      successPrefix: '/productos/',
      fields: {
        nombre: 'Nombre',
        cantidad: 'Cantidad',
        precio_unitario: 'Precio'
        //proveedor: 'proveedor'
      }
    };
  }
})();
