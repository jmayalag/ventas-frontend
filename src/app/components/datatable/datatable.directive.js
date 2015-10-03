(function() {
  'use strict';

  angular
    .module('ventas')
    .directive('datatable', datatable);

  /** @ngInject */
  function datatable() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/datatable/datatable.html',
      scope: {
          serviceName: '@'
      },
      controller: DataTableController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DataTableController($injector) {
      var vm = this;
      var service = $injector.get(vm.serviceName);
      vm.data = service.get();
    }
  }

})();
