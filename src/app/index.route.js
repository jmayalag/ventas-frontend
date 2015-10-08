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
        controller: 'ClienteController',
        controllerAs: 'ctl'
      })
      .when('/clientes/create', {
        templateUrl: 'app/cliente/form/form.html',
        controller: 'ClienteFormController',
        controllerAs: 'ctl'
      })
      .when('/clientes/:id', {
        templateUrl: 'app/cliente/detail/detail.html',
        controller: 'ClienteDetailController',
        controllerAs: 'ctl'
      })
      .when('/clientes/:id/update', {
        templateUrl: 'app/cliente/form/form.html',
        controller: 'ClienteFormEditController',
        controllerAs: 'ctl'
      })

      .when('/proveedores', {
        templateUrl: 'app/proveedor/proveedor.html',
        controller: 'ProveedorController',
        controllerAs: 'ctl'
      })
      .when('/proveedores/create', {
        templateUrl: 'app/proveedor/form/form.html',
        controller: 'ProveedorFormController',
        controllerAs: 'ctl'
      })
      .when('/proveedores/:id', {
        templateUrl: 'app/proveedor/detail/detail.html',
        controller: 'ProveedorDetailController',
        controllerAs: 'ctl'
      })
      .when('/proveedores/:id/update', {
        templateUrl: 'app/proveedor/form/form.html',
        controller: 'ProveedorFormEditController',
        controllerAs: 'ctl'
      })

      .when('/productos/', {
        templateUrl: 'app/producto/producto.html',
        controller: 'ProductoController',
        controllerAs: 'ctl'
      })
      .when('/productos/create', {
        templateUrl: 'app/producto/form/form.html',
        controller: 'ProductoFormController',
        controllerAs: 'ctl'
      })
      .when('/productos/:id', {
        templateUrl: 'app/producto/detail/detail.html',
        controller: 'ProductoDetailController',
        controllerAs: 'ctl'
      })
      .when('/productos/:id/update', {
        templateUrl: 'app/producto/form/form.html',
        controller: 'ProductoFormEditController',
        controllerAs: 'ctl'
      })
      .when('/ventas/', {
        templateUrl: 'app/venta/venta.html',
        controller: 'VentaController',
        controllerAs: 'ctl'
      })
      .when('/ventas/create', {
        templateUrl: 'app/venta/form/form.html',
        controller: 'VentaFormController',
        controllerAs: 'ctl'
      })
      .when('/ventas/:id', {
        templateUrl: 'app/venta/detail/detail.html',
        controller: 'VentaDetailController',
        controllerAs: 'ctl'
      })
      .when('/compras/', {
        templateUrl: 'app/compra/compra.html',
        controller: 'CompraController',
        controllerAs: 'ctl'
      })
      .when('/compras/create', {
        templateUrl: 'app/compra/form/form.html',
        controller: 'CompraFormController',
        controllerAs: 'ctl'
      })
      .when('/compras/:id', {
        templateUrl: 'app/compra/detail/detail.html',
        controller: 'CompraDetailController',
        controllerAs: 'ctl'
      })
      //.otherwise({
      //  redirectTo: '/'
      //})
    ;
  }

})();
