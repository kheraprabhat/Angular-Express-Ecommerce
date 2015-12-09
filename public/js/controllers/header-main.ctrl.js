(function(app) {
    'use strict';
    app.controller('HeaderMainCtrl', ['authenticationSrvc', 'utility', function(authenticationSrvc, utility) {
        var vm = this;
        vm.primaryMenu = [];
        vm.isAuthenticated = authenticationSrvc.user.isAuthenticated;
        vm.primaryMenu = utility.getData('/categories').then(function(data) {
            vm.primaryMenu = data;
        });
    }]);
})(angular.module("Meanapp"));