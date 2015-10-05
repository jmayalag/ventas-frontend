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
    function CustomFormController($log, $location) {
      var vm = this;
      var o = vm.options;
      var successUrl = function (id) {
        return o.successPrefix + id;
      };

      vm.title = o.title;
      vm.fields = o.fields;
      vm.previous = o.previous;

      if (!vm.item) {
        vm.item = {};
      }

      vm.cancel = o.cancel ? o.cancel : function () {
        $location.path(vm.previous).replace(); //sin callback
      };

      if (o.saveItem) {
        vm.persist = function () { //callback
          o.saveItem(vm.object);
        };
      } else { //sin callback
        if (!o.edit) { //si es creacion
          vm.persist = function () {
            vm.item.$save(function (data) {
              $log.info("Guardado");
              $location.path(successUrl(data.id));
            }, function (err) {
              $log.error("Error al guardar");
            });
          };
        } else {
          vm.persist = function () {
            vm.item.$update(function (data) {
              $log.info("Updated");
              $location.path(successUrl(data.id));
            }, function (err) {
              $log.error("Error update");
            });
          };
        }
      }
    }
  }

})
();
