//(function () {
//  'use strict';
//
//  angular.module('ventas').controller('VentaFormEditController', VentaFormEditController);
//
//  /** @ngInject */
//  function VentaFormEditController($scope, $routeParams, Venta) {
//    var id = $routeParams.id;
//    $scope.entity = Venta.get({venta_id: id});
//
//    $scope.form_options = {
//      title: 'Modificar Venta',
//      edit: 'true',
//      previous: '/ventas/' + id,
//      successPrefix: '/ventas/',
//      fields: {
//        nombre: 'Nombre',
//        ruc: 'RUC',
//        email: 'E-mail',
//        telefono: 'Telefono',
//      }
//    };
//  }
//})();
