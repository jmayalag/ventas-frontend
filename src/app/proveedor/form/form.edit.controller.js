(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorFormEditController', ProveedorFormEditController);

  /** @ngInject */
  function ProveedorFormEditController($scope, $routeParams, Proveedor) {
    var id = $routeParams.id;
    $scope.proveedor = Proveedor.get({prov_id: id});

    $scope.form_options = {
      title: 'Modificar Proveedor',
      edit: 'true',
      previous: '/proveedores/' + id,
      successPrefix: '/proveedores/',
      fields: {
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'E-mail',
        telefono: 'Telefono',
      }
    };
  }
})();
