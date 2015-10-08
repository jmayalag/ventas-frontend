(function () {
  'use strict';

  angular.module('ventas').controller('ClienteController', ClienteController);

  /** @ngInject */
  function ClienteController($location, Cliente) {
    var vm = this;
    vm.options = {
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        apellidos: 'Apellido',
        cedula: 'Cedula'
      },
      data_prop: 'listado',
      item_click: function (i) {
        var path = '/clientes/' + i.id;
        $location.path(path);
      }
    };
  }
})();
