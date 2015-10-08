(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Venta', Venta);

  /** @ngInject */
  function Venta($resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/ventas/:venta_id', {compra_id: '@id'}, {
      update: {method: 'PUT', params: {compra_id: ''}}
    });
  }
})();
