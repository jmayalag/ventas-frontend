//(function () {
//  'use strict';
//
//  angular.module('ventas').controller('CompraFormEditController', CompraFormEditController);
//
//  /** @ngInject */
//  function CompraFormEditController($scope, $routeParams, Compra) {
//    var id = $routeParams.id;
//    $scope.entity = Compra.get({compra_id: id});
//
//    $scope.form_options = {
//      title: 'Modificar Compra',
//      edit: 'true',
//      previous: '/compras/' + id,
//      successPrefix: '/compras/',
//      fields: {
//        nombre: 'Nombre',
//        ruc: 'RUC',
//        email: 'E-mail',
//        telefono: 'Telefono',
//      }
//    };
//  }
//})();
