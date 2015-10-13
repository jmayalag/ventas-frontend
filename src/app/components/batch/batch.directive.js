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
      var uploadUrl = vm.options.uploadUrl;

      vm.showDialog = function (ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'app/components/batch/dialog.tmpl.html',
          parent: $document.body,
          targetEvent: ev,
          clickOutsideToClose: true
        });
      };

      /** @ngInject */
      function DialogController($scope, $mdDialog, Upload) {
        $scope.selected = false;

        $scope.cancel = function () {
          $log.info("cancel");
          $mdDialog.cancel();
        };

        $scope.upload = function (file) {
          $scope.selected = true;
          $scope.loading = true;
          console.log(vm.options);
          Upload.upload({
            url: uploadUrl,
            data: {file: file}
          }).then(function (resp) {
            $scope.loading = false;
            $scope.result = resp.data.message;
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          }, function (resp) {
            $scope.loading = false;
            $scope.result = resp.statusText;
            console.log(resp);
            console.log('Error status: ' + resp.status);
          }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          });
        };


        $scope.submit = function () {
          if ($scope.file && !$scope.file.$error) {
            $scope.upload($scope.file);
          }
        };
      }
    }
  }

})
();
