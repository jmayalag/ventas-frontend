(function () {
  'use strict';

  angular.module('ventas').controller('ClienteDetailController', ClienteDetailController);

  /** @ngInject */
  function ClienteDetailController($scope, $routeParams, Cliente) {
    var id = $routeParams.id;
    $scope.entity = Cliente.get({cliente_id: id});

    $scope.detail_options = {
      title_field: 'nombre',
      previous: '/clientes',
      editPath: '/clientes/' + id + '/update'
    };
  }
})();
