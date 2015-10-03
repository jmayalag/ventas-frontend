(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Proveedor', Proveedor);

  /** @ngInject */
  function Proveedor($log, $resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/proveedores/:id');
  }
})();
