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
      controller: CustomFormController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CustomFormController() {
      var vm = this;
      var o = vm.options;

      vm.title = o.title;
      vm.fields = o.fields;
      vm.previous = o.previous;
      if (!vm.item) {
        vm.item = {}
        angular.forEach(vm.fields, function (v, k) {
          vm.item[k] = '';
        });
      }
      console.log(vm.item);

      vm.persist = function () {
        o.saveItem(vm.item);
      };
    }
  }

})
();
