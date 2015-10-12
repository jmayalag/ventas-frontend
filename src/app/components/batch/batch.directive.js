(function () {
  'use strict';

  angular
    .module('ventas')
    .directive('batch', batch);

  /** @ngInject */
  function batch() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/batch/batch.html',
      scope: {
        options: '='
      },
      controller: BatchController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BatchController($log, $mdDialog, $document) {
      var vm = this;
      var service = vm.options.service;

      vm.showDialog = function (ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'app/components/batch/dialog.tmpl.html',
          parent: $document.body,
          targetEvent: ev,
          clickOutsideToClose: true
        });
      };

      function DialogController($scope, $mdDialog) {
        $scope.selected = false;

        $scope.cancel = function () {
          $log.info("cancel");
          $mdDialog.cancel();
        };

        $scope.upload = function (file) {
          $scope.selected = true;
          $scope.loading = true;
          $log.info(file);
          service.batch(file, function (data) {
            $scope.loading = false;
            $scope.result = data.message;
          }, function (err) {
            $log.error(err);
          });
        };
      }
    }
  }

})
();
