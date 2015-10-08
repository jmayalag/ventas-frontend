(function () {
  'use strict';

  angular.module('ventas').controller('ClienteDetailController', ClienteDetailController);

  /** @ngInject */
  function ClienteDetailController($routeParams, Cliente) {
    var vm = this;
    var id = $routeParams.id;
    vm.entity = Cliente.get({cliente_id: id});

    vm.detail_options = {
      title_field: 'nombre',
      previous: '/clientes',
      editPath: '/clientes/' + id + '/update'
    };
  }
})();
