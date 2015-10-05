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
      .when('/productos/', {
        templateUrl: 'app/producto/producto.html',
        controller: 'ProductoController'
      })
      .when('/productos/:id', {
        templateUrl: 'app/producto/detail/detail.html',
        controller: 'ProductoDetailController'
      })
      //.otherwise({
      //  redirectTo: '/'
      //})
    ;
  }

})();
