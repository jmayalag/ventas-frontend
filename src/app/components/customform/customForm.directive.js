(function () {
  'use strict';

  angular
    .module('ventas')
    .directive('customForm', customForm);

  /** @ngInject */
  function customForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/customForm/customForm.html',
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
