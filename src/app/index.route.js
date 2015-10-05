(function () {
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
      .when('/proveedores/create', {
        templateUrl: 'app/proveedor/form/form.html',
        controller: 'ProveedorFormController'
      })
      .when('/proveedores/:id', {
        templateUrl: 'app/proveedor/detail/detail.html',
        controller: 'ProveedorDetailController'
      })
      .when('/proveedores/:id/update', {
        templateUrl: 'app/proveedor/form/form.html',
        controller: 'ProveedorFormEditController'
      })
      //.otherwise({
      //  redirectTo: '/'
      //})
    ;
  }

})();
