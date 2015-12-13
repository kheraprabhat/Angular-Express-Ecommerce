(function(app) {
    'use strict';
    app.controller('CategoryProductFilterCtrl', ['$stateParams', 'utility', 'categorySrvc', 'getFilteredProducts',
        function(stateParams, utility, categorySrvc, getFilteredProducts) {
            var vm = this;
            vm.categoryName = stateParams.categoryName;
            vm.filterProducts = getFilteredProducts;
        }
    ]);
})(angular.module("Meanapp"));