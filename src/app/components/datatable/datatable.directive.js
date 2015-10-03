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
          dataobj: '='
      },
      controller: DataTableController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DataTableController(moment) {
      var vm = this;
      vm.message = 'Hola Mundo';
      // "vm.creation" is avaible by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
