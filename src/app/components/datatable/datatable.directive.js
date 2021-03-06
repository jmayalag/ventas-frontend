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
    function DataTableController($log, $injector, $mdDialog) {
      var vm = this;
      var service = $injector.get(vm.serviceName);
      vm.batch_options = {uploadUrl: vm.options.import};
      var o = vm.options;
      var sort = {field: 'id', desc: false};
      vm.item_click = o.item_click;

      var pageRestart = function () {
        vm.current_page = 1;
      };

      if (vm.options.export) {
        vm.export = function (format) {
          $log.info("Exportando " + format);
          $log.info(vm.queryParams);

          var queryString = "?";

          for (var k in vm.queryParams) {

            queryString = queryString + k + '=' + vm.queryParams[k] + '&';

          }

          queryString = queryString.substr(0, queryString.length - 1);

          $log.info(queryString);

          //var p = vm.queryParams;
          //delete p['page'];
          //$log.info(p);
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: 'http://localhost:8080/tareaweb2/export' + vm.options.export + queryString
          })[0].click();
        };
      }

      vm.import = function () {
        $log.info("Importando");
      };

      var getData = function () {
        vm.queryParams.page = vm.current_page;
        vm.loading = true;
        var data = service.get(vm.queryParams, function () {
          vm.loading = false;
          vm.items = data[o.data_prop];
          vm.pages = data.meta.total_pages;
          $log.info("Datos obtenidos");
        }, function () {
          $mdDialog.show(
            $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('No se pudieron obtener los datos')
              .content('Intente mas tarde.')
              .ok('Ok')
          );
          $log.error("Fallo en obtener datos");
        });
      };

      vm.pagination = {
        getPages: function () {
          var n = vm.pages;
          var m = ((vm.current_page - 1) / 10 >> 0) * 10;
          var f = vm.pages >= 10 ? 10 : vm.pages;
          var pages = new Array(f);
          for (var i = 0; i < f; i++) {
            pages[i] = m + i + 1;
          }
          return pages;
        },
        changePage: function (newPage) {
          if (newPage === vm.current_page) {
            return;
          }
          vm.current_page = newPage;
          getData();
        },
        prev: function () {
          if (vm.current_page > 1) {
            this.changePage(vm.current_page - 1);
          }
        },
        next: function () {
          if (vm.current_page < vm.pages) {
            this.changePage(vm.current_page + 1);
          }
        }
      };

      vm.sorting = {
        icon: function (field) {
          if (field === sort.field) {
            return sort.desc ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
          }
          return 'glyphicon glyphicon-sort';
        },
        sortColumn: function (field) {
          $log.info('Orden: ' + field);
          if (field !== sort.field) {
            delete vm.queryParams[sort.field]; // eliminamos el orden anterior
            sort.field = field;
            sort.desc = false;
          } else {
            sort.desc = !sort.desc;
          }
          vm.queryParams[field] = sort.desc ? 'desc' : 'asc';
          pageRestart();
          getData();
        }
      };

      vm.filtering = {
        searchFields: {},
        filter: function () {
          $log.info("Filtering");
          for (var k in this.searchFields) {
            if (!this.searchFields[k]) {
              delete vm.queryParams[k];
            } else {
              vm.queryParams[k] = this.searchFields[k];
            }
          }
          pageRestart();
          getData();
        }
      };

      vm.reset = function () {
        sort = {field: 'id', desc: false};
        //vm.queryParams = {id: 'asc'};
        vm.filtering.searchFields = {};
        //vm.queryParams = {};
        init();
      };

      var init = function () {
        vm.queryParams = {id: 'asc'};
        pageRestart();
        getData();
      };

      init();
    }
  }

})
();
