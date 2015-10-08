(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorFormEditController', ProveedorFormEditController);

  /** @ngInject */
  function ProveedorFormEditController($routeParams, Proveedor) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Proveedor.get({prov_id: id});

    vm.form_options = {
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
