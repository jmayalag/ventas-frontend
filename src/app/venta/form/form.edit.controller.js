//(function () {
//  'use strict';
//
//  angular.module('ventas').controller('VentaFormEditController', VentaFormEditController);
//
//  /** @ngInject */
//  function VentaFormEditController(vm, $routeParams, Venta) {
//    var id = $routeParams.id;
//    vm.entity = Venta.get({venta_id: id});
//
//    vm.form_options = {
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
