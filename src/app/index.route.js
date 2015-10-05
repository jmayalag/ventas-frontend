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

      .when('/clientes', {
        templateUrl: 'app/cliente/cliente.html',
        controller: 'ClienteController'
      })
      .when('/clientes/create', {
        templateUrl: 'app/cliente/form/form.html',
        controller: 'ClienteFormController'
      })
      .when('/clientes/:id', {
        templateUrl: 'app/cliente/detail/detail.html',
        controller: 'ClienteDetailController'
      })
      .when('/clientes/:id/update', {
        templateUrl: 'app/cliente/form/form.html',
        controller: 'ClienteFormEditController'
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
      .when('/compras/', {
        templateUrl: 'app/compra/compra.html',
        controller: 'CompraController'
      })
      .when('/compras/create', {
        templateUrl: 'app/compra/form/form.html',
        controller: 'CompraFormController'
      })
      .when('/compras/:id', {
        templateUrl: 'app/compra/detail/detail.html',
        controller: 'CompraDetailController'
      })
      .when('/compras/:id/update', {
        templateUrl: 'app/compra/form/form.html',
        controller: 'CompraFormEditController'
      })
      //.otherwise({
      //  redirectTo: '/'
      //})
    ;
  }

})();
