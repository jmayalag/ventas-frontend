(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Proveedor', Proveedor);

  /** @ngInject */
  function Proveedor($resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/proveedores/:prov_id', {prov_id: '@id'}, {
      update: {method: 'PUT', params: {prov_id: ''}}
    });
  }
})();
