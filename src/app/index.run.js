(function() {
  'use strict';

  angular
    .module('ventas')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
