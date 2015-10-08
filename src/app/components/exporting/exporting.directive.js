(function () {
  'use strict';

  angular
    .module('ventas')
    .directive('exporting', exporting);

  /** @ngInject */
  function exporting() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/exporting/exporting.html',
      scope: {
        options: '='
      },
      controller: ExportController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ExportController($log, $location, $mdDialog) {
      var vm = this;
      var o = vm.options;

      vm.export = function () {
        $log.info("Exportando");
        vm.mensaje = 'exportando';
      };
    }
  }

})
();
