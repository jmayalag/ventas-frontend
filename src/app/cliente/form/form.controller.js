(function () {
  'use strict';

  angular.module('ventas').controller('ClienteFormController', ClienteFormController);

  /** @ngInject */
  function ClienteFormController(Cliente) {
    var vm = this;
    vm.entity = new Cliente(); //si no hay save callback, se debe pasar el Resource
    vm.form_options = {
      title: 'Crear Cliente',
      previous: '/clientes',
      successPrefix: '/clientes/',
      fields: {
        nombre: 'Nombre',
        apellidos: 'Apellido',
        cedula: 'cedula'
      }
    };
  }
})();
