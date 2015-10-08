(function () {
  'use strict';

  angular.module('ventas').controller('ClienteFormEditController', ClienteFormEditController);

  /** @ngInject */
  function ClienteFormEditController($routeParams, Cliente) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Cliente.get({cliente_id: id});

    vm.form_options = {
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
