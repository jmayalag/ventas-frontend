(function () {
  'use strict';

  angular.module('ventas').controller('VentaFormController', VentaFormController);

  /** @ngInject */
  function VentaFormController($scope, Venta) {
    $scope.entity = new Venta(); //si no hay save callback, se debe pasar el Resource
    $scope.form_options = {
      title: 'Crear Venta',
      previous: '/ventas',
      successPrefix: '/ventas/',
      fields: {
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'E-mail',
        telefono: 'Telefono',
      }
    };
  }
})();
