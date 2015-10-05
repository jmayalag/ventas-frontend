(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorController', ProveedorController);

  /** @ngInject */
  function ProveedorController($scope, $location, Proveedor) {
    //$scope.proveedores = [
    //  {id: 1, nombre: 'Jordan', ci: '4058908'},
    //  {id: 2, nombre: 'Alma', ci: '4058908'}
    //];
    //$scope.proveedores = Proveedor.get();

    $scope.options = {
      column_defs: {
        id: 'ID',
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'Email'
      },
      data_prop: 'listado',
      item_click: function (proveedor) {
        var path = '/proveedores/' + proveedor.id;
        $location.path(path);
      }
    };

    //$scope.crear = function () {
    //  $scope.creating = true;
    //  //var proveedor = new Proveedor();
    //  //proveedor['nombre'] = 'Prueba';
    //  //proveedor['ruc'] = '3090';
    //  //proveedor['email'] = 'email@son.com';
    //  //proveedor['telefono'] = '49049';
    //  //console.log(proveedor);
    //  //Proveedor.save(proveedor);
    //};
  }
})();
