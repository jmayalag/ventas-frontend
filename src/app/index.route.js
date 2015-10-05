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
      .when('/productos/create', {
        templateUrl: 'app/producto/form/form.html',
        controller: 'ProductoFormController'
      })
      .when('/productos/:id', {
        templateUrl: 'app/producto/detail/detail.html',
        controller: 'ProductoDetailController'
      })
      .when('/productos/:id/update', {
        templateUrl: 'app/producto/form/form.html',
        controller: 'ProductoFormEditController'
      })
      .when('/ventas/', {
        templateUrl: 'app/venta/venta.html',
        controller: 'VentaController'
      })
      .when('/ventas/create', {
        templateUrl: 'app/venta/form/form.html',
        controller: 'VentaFormController'
      })
      .when('/ventas/:id', {
        templateUrl: 'app/venta/detail/detail.html',
        controller: 'VentaDetailController'
      })
      .when('/ventas/:id/update', {
        templateUrl: 'app/venta/form/form.html',
        controller: 'VentaFormEditController'
      })
      //.otherwise({
      //  redirectTo: '/'
      //})
    ;
  }

})();
