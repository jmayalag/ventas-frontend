(function () {
  'use strict';

  angular
    .module('ventas')
    .directive('dataForm', dataForm);

  /** @ngInject */
  function dataForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dataForm/dataForm.html',
      scope: {
        options: '=',
        item: '='
      },
      controller: DataFormController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DataFormController() {
      var vm = this;
      var o = vm.options;

      vm.title = o.title;
    }
  }

})
();
