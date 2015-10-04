(function () {
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
        options: '=',
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
      var o = vm.options;

      var pageRestart = function () {
        vm.current_page = 1;
      }

      var getData = function () {
        vm.queryParams.page = vm.current_page;
        vm.loading = true;
        var data = service.get(vm.queryParams, function () {
          vm.loading = false;
          vm.items = data[o.data_prop];
          vm.pages = data.meta.total_pages;
          console.log("Datos obtenidos");
        }, function () {
          alert("No se pudo obtener datos del servidor.");
          console.log("Fallo en obtener datos");
        });
      };

      vm.pagination = {
        getPages: function () {
          var pages = new Array(vm.pages);
          return pages;
        },
        changePage: function (newPage) {
          if (newPage == vm.current_page) return;
          vm.current_page = newPage;
          getData();
        },
        prev: function () {
          if (vm.current_page > 1)
            this.changePage(vm.current_page - 1);
        },
        next: function () {
          if (vm.current_page < vm.pages)
            this.changePage(vm.current_page + 1);
        }
      };

      var init = function () {
        vm.queryParams = {};
        pageRestart();
        getData();
      };

      init();
    }
  }

})
();
