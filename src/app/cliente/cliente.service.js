(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Cliente', Cliente);

  /** @ngInject */
  function Cliente($resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/clientes/:cliente_id', {cliente_id: '@id'}, {
      update: {method: 'PUT', params: {cliente_id: ''}},
      all: {method: 'GET', params: {cliente_id: 'all'}, isArray: true},
      batch: {method: 'POST', params: {cliente_id: 'masivo'}}
    });
  }
})();
