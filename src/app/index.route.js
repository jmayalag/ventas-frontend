(function() {
  'use strict';

  angular
    .module('ventas')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/proveedores', {
        templateUrl: 'app/proveedor/proveedor.html',
        controller: 'ProveedorController'
      })
      .when('/proveedores/:id', {
        templateUrl: 'app/proveedor/detail/detail.html',
        controller: 'ProveedorDetailController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
