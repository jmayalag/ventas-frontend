(function () {
  'use strict';

  angular.module('ventas').controller('ProductoFormEditController', ProductoFormEditController);

  /** @ngInject */
  function ProductoFormEditController($scope, $routeParams, Producto) {
    var id = $routeParams.id;
    $scope.entity = Producto.get({prod_id: id});

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
