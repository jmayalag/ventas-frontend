(function () {
  'use strict';

  angular.module('ventas').controller('ClienteFormEditController', ClienteFormEditController);

  /** @ngInject */
  function ClienteFormEditController($scope, $routeParams, Cliente) {
    var id = $routeParams.id;
    $scope.entity = Cliente.get({cliente_id: id});

    $scope.form_options = {
      title: 'Modificar Cliente',
      edit: 'true',
      previous: '/clientes/' + id,
      successPrefix: '/clientes/',
      fields: {
        nombre: 'Nombre',
        apellidos: 'Apellido',
        cedula: 'cedula'
      }
    };
  }
})();
