(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorFormController', ProveedorFormController);

  /** @ngInject */
  function ProveedorFormController($scope, $routeParams, $location, Proveedor) {
    $scope.form_options = {
      title: 'Crear Proveedor',
      previous: '#/proveedores',
      fields: {
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'E-mail',
        telefono: 'Telefono',
      },
      saveItem: function (proveedor) {
        console.log(proveedor);
        Proveedor.save(proveedor, function (val, rHeaders) {
          console.log(val.id);
          var path = 'proveedores/' + val.id;
          $location.path(path);
        }, function (err) {
          console.log("no guardo");
        });
      }
    };
  }
})();
