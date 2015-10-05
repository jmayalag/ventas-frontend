(function () {
  'use strict';

  angular.module('ventas').controller('ProductoDetailController', ProductoDetailController);

  /** @ngInject */
  function ProductoDetailController($scope, $routeParams, Producto) {
    var id = $routeParams.id;
    $scope.entity = Producto.get({prod_id: id});

    $scope.detail_options = {
      title_field: 'nombre',
      previous: '/productos',
      editPath: '/productos/' + id + '/update'
    };
  }
})();
