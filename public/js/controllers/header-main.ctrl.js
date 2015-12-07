(function(app) {
    'use strict';
    app.controller('HeaderMainCtrl', ['utility', function(utility) {
        var vm = this;
        vm.primaryMenu = [];
        vm.primaryMenu = utility.getData('/categories').then(function(data) {
            vm.primaryMenu = data;
        });
    }]);
})(angular.module("Meanapp"));