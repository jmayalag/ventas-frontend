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
      function BatchController($log, $mdDialog, $scope) {
        var vm = this;
        var o = vm.options;
        var service = vm.options.service;

        $scope.showDialog = function (ev) {
          $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/components/batch/dialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
          })
        };

        function DialogController($scope, $mdDialog) {
          $scope.hide = function () {
            $log.info("hide");
            $mdDialog.hide();
          };
          $scope.cancel = function () {
            $log.info("cancel");
            $mdDialog.cancel();
          };
          $scope.answer = function (answer) {
            $log.info("answer");
            $mdDialog.hide(answer);
          };
          $scope.upload = function (file){
            console.log(file);
            service.batch(file);
          };
        };
      }
    }

  })
();
