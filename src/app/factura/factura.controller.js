(function () {
  'use strict';

  angular.module('ventas').controller('FacturaController', FacturaController);

  /** @ngInject */
  function FacturaController($log, $mdToast, Factura) {
    var vm = this;

    //console.log(new Factura());

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
        console.log(data);
        console.log(r);
        showSimpleToast(data.message);
      }, function (err) {
        console.log(err);
      });

    };

    vm.status = function () {
      $log.info("Pidiendo estado facturacion");
      Factura.status(function (data, r) {
        console.log(data);
        console.log(r);
        showSimpleToast(data.message);
      }, function (err) {
        console.log(err);
      });
    };

    vm.stop = function () {
      $log.info("Deteniendo facturacion");
      Factura.stop(function (data, r) {
        console.log(data);
        console.log(r);
        showSimpleToast(data.message);
      }, function (err) {
        console.log(err);
      });
    };
  }
})();
