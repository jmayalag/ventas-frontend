(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Factura', Factura);

  /** @ngInject */
  function Factura($resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/facturas/:op', {}, {
      start: {method: 'GET', params: {op: 'procesar'}},
      status: {method: 'GET', params: {op: 'interrumpir'}},
      stop: {method: 'GET', params: {op: 'consultar_estado'}}
    });
  }
})();
