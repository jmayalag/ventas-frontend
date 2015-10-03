(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Proveedor', Proveedor);

  /** @ngInject */
  function Proveedor($log, $resource) {
    var apiHost = 'http://jsonplaceholder.typicode.com';
    return $resource(apiHost + '/users/:id');
  }
})();
