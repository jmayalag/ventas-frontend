(function () {
  'use strict';

  angular
    .module('ventas')
    .factory('Producto', Producto);

  /** @ngInject */
  function Producto($resource) {
    var apiHost = 'http://localhost:8080/tareaweb2/rest';
    return $resource(apiHost + '/productos/:prod_id', {prod_id: '@id'}, {
      update: {method: 'PUT', params: {prod_id: ''}},
      all: {method: 'GET', params: {prod_id: 'all'}, isArray: true}
    });
  }
})();
