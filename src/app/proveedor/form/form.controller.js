(function () {
  'use strict';

  angular.module('ventas').controller('ProveedorFormController', ProveedorFormController);

  /** @ngInject */
  function ProveedorFormController($scope, Proveedor) {
    $scope.proveedor = new Proveedor(); //si no hay save callback, se debe pasar el Resource
    $scope.form_options = {
      title: 'Crear Proveedor',
      previous: '/proveedores',
      successPrefix: '/proveedores/',
      fields: {
        nombre: 'Nombre',
        ruc: 'RUC',
        email: 'E-mail',
        telefono: 'Telefono',
      }
    };
    //Callback de guardado (opcional)
    //saveItem: function (proveedor) {
    //  console.log(proveedor);
    //  Proveedor.save(proveedor, function (val, rHeaders) {
    //    console.log(val.id);
    //    var path = 'proveedores/' + val.id;
    //    $location.path(path);
    //  }, function (err) {
    //    console.log("no guardo");
    //  });
    //}
  }
})();
