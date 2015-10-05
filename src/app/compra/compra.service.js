(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Compra', Compra);

  /** @ngInject */
  function Compra($resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/proveedores/:compra_id', {compra_id: '@id'}, {
      update: {method: 'PUT', params: {compra_id: ''}}
    });
  }
})();
