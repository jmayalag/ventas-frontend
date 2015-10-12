(function () {
  'use strict';

  angular.module('ventas').controller('FacturaController', FacturaController);

  /** @ngInject */
  function FacturaController($log, $mdToast, $mdDialog,Factura) {
    var vm = this;

    var showError = function(err, title){
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title(title? title : "Error al facturar")
          .content(err)
          .ok('Ok')
      );
    };

    var showSimpleToast = function (msg) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .position("right bottom")
          .hideDelay(3000)
      );
    };

    vm.start = function () {
      $log.info("Iniciado facturacion");
      Factura.start(function (data, r) {
        $log.debug(data);
        $log.debug(r);
        showSimpleToast(data.message);
      }, function (err) {
        showError(err);
      });

    };

    vm.status = function () {
      $log.info("Pidiendo estado facturacion");
      Factura.status(function (data, r) {
        $log.debug(data);
        $log.debug(r);
        showSimpleToast(data.message);
      }, function (err) {
        showError(err);
      });
    };

    vm.stop = function () {
      $log.info("Deteniendo facturacion");
      Factura.stop(function (data, r) {
        $log.debug(data);
        $log.debug(r);
        showSimpleToast(data.message);
      }, function (err) {
        showError(err);
      });
    };
  }
})();
