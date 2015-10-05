(function () {
  'use strict';

  angular.module('ventas').controller('CompraFormController', CompraFormController);

  /** @ngInject */
  function CompraFormController($scope, Compra) {
    $scope.entity = new Compra(); //si no hay save callback, se debe pasar el Resource
    $scope.form_options = {
      title: 'Crear Compra',
      previous: '/compras',
      successPrefix: '/compras/',
      fields: {
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'E-mail',
        telefono: 'Telefono',
      }
    };
  }
})();
