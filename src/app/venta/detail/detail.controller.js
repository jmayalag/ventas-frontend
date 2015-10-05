(function () {
  'use strict';

  angular.module('ventas').controller('VentaDetailController', VentaDetailController);

  /** @ngInject */
  function VentaDetailController($scope, $routeParams, Venta) {
    var id = $routeParams.id;
    $scope.entity = Venta.get({venta_id: id});

    $scope.detail_options = {
      title_field: 'nombre',
      previous: '/ventas',
      editPath: '/ventas/' + id + '/update'
    };
  }
})();
