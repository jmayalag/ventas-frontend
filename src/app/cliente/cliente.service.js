(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Cliente', Cliente);

  /** @ngInject */
  function Cliente($resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/proveedores/:cliente_id', {cliente_id: '@id'}, {
      update: {method: 'PUT', params: {cliente_id: ''}}
    });
  }
})();
