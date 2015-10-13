(function () {
  'use strict';

  angular.module('ventas').controller('ClienteController', ClienteController);

  /** @ngInject */
  function ClienteController($location) {
    var vm = this;
    vm.options = {
      import: 'http://localhost:8080/tareaweb2/rest/clientes/upload',
      export: 'Clientes',
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
