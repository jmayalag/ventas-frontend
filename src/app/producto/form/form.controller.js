(function () {
  'use strict';

  angular.module('ventas').controller('ProductoFormController', ProductoFormController);

  /** @ngInject */
  function ProductoFormController($scope, Producto) {
    $scope.entity = new Producto(); //si no hay save callback, se debe pasar el Resource
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
