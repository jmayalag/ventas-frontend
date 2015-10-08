(function () {
  'use strict';

  angular
    .module('ventas')
    .directive('detailview', detailview);

  /** @ngInject */
  function detailview() {
    var directive = {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/detailview/detailview.html',
      scope: {
        options: '=',
        item: '='
      },
      controller: DetailViewController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DetailViewController($log, $location, $mdDialog) {
      var vm = this;
      var o = vm.options;
      var deleteItem = o.deleteItem;

      //console.log(o);
      var setOptions = function () {
        if (!o) {
          o = {};
        }
        if (o.editPath) {
          vm.editPath = o.editPath;
        }

        vm.previous = o.previous ? o.previous : '/';
        vm.cancel = o.cancel ? o.cancel : function () {
          $location.path(vm.previous).replace(); //sin callback
        };

        if (!o.readOnly) {
          vm.edit = o.edit ? o.edit : function () {
            $location.path(vm.editPath).replace();
          };
        }

        if (o.title_field) {
          vm.item.$promise.then(function (data) {
            vm.title = data[o.title_field];
          });
        } else if (o.title) {
          vm.title = o.title;
        } else {
          vm.title = 'Detail View';
        }
        if (o.fields) {
          vm.fields = o.fields;
        } else {
          vm.fields = {};
          vm.item.$promise.then(function (data) {
            angular.forEach(data, function (v, k) {
              vm.fields[k] = k.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
              });
            });
            delete vm.fields.$promise;
            delete vm.fields.$resolved;
          });
        }
      };

      setOptions();

      vm.deleteConfirm = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Esta seguro?')
          .content('Esta operacion <strong>no se puede revertir</strong>.')
          .ariaLabel('Eliminacion').targetEvent(ev)
          .ok('Eliminar').cancel('Cancelar');

        $mdDialog.show(confirm).then(function () {
          $log.debug("borrando");
          if (deleteItem) {
            deleteItem(vm.item);
          } else {
            vm.item.$delete(function () {
              $log.info("Eliminado");
              $location.path(vm.previous);
            }, function () {
              $log.error("Fallo la eliminacion");
            });
          }
        });
      };
    }
  }

})
();
