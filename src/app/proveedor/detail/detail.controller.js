(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorDetailController', ProveedorDetailController);

  /** @ngInject */
  function ProveedorDetailController($routeParams, Proveedor) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Proveedor.get({prov_id: id});

    vm.detail_options = {
      title_field: 'nombre',
      previous: '/proveedores',
      editPath: '/proveedores/' + id + '/update'
    };
  }
})();
