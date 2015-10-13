(function () {
  'use strict';

  angular.module('ventas').controller('FacturaController', FacturaController);

  /** @ngInject */
  function FacturaController($log, $interval, $mdToast, $mdDialog, Factura) {
    var vm = this;
    var interval = null;

    var checkStatus = function () {
      Factura.status(function (data) {
        //$log.info(data.message);
        if (data.message === 'Detenido') {
          $log.debug("Termino");
          vm.progress = false;
          $interval.cancel(interval);
          showSimpleToast("Facturacion terminada");
        } else {
          $log.debug("Corriendo");
        }
      }, function (err) {
        $log.error(err.data.message);
      });
    };

    vm.progress = true;
    interval = $interval(checkStatus, 250, false);

    var showError = function (err, title) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title(title ? title : "Error al facturar")
          .content(err.data.message)
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
      vm.progress = true;
      $log.info("Iniciado facturacion");
      Factura.start(function (data) {
        //$log.debug(data);
        showSimpleToast(data.message);
      }, function (err) {
        showError(err);
      });
      interval = $interval(checkStatus, 1000, false);
    };

    vm.status = function () {
      $log.info("Pidiendo estado facturacion");
      Factura.status(function (data) {
        $log.debug(data);
        showSimpleToast(data.message);
      }, function (err) {
        showError(err);
      });
    };

    vm.stop = function () {
      $log.info("Deteniendo facturacion");
      Factura.stop(function (data) {
        $log.debug(data);
        vm.progress = false;
        $interval.cancel(interval);
        showSimpleToast(data.message);
      }, function (err) {
        showError(err);
      });
    };
  }
})();
