(function () {
  'use strict';

  angular.module('ventas').controller('CompraDetailController', CompraDetailController);

  /** @ngInject */
  function CompraDetailController($scope, $routeParams, Compra) {
    var id = $routeParams.id;
    $scope.entity = Compra.get({compra_id: id});

    $scope.detail_options = {
      title_field: 'nombre',
      previous: '/compras',
      editPath: '/compras/' + id + '/update'
    };
  }
})();
