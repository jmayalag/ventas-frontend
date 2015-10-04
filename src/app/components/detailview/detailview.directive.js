(function () {
  'use strict';

  angular
    .module('ventas')
    .directive('detailview', detailview);

  /** @ngInject */
  function detailview() {
    var directive = {
      restrict: 'E',
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
    function DetailViewController() {
      var vm = this;
      var o = vm.options;

      var setOptions = function () {
        if (!o) {
          o = {};
        }
        if (o.previous){
          vm.previous = o.previous;
        } else {
          vm.previous = '/';
        }
        if (o.title_field) {
          vm.item.$promise.then(function (data) {
            vm.title = data[o.title_field];
          });
        } else if (o.field) {
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
              ;
            });
            delete vm.fields.$promise
            delete vm.fields.$resolved
          });
        }
      };

      setOptions();
    }
  }

})
();
