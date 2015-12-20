(function(app) {
    'use strict';
    app.controller('CategoryProductFilterCtrl', [
        '$scope',
        '$stateParams',
        '$location',
        '$state',
        'utility',
        'categorySrvc',
        'filteredProducts',
        'productColors',
        'productSize',
        function(
            scope,
            stateParams,
            location,
            state,
            utility,
            categorySrvc,
            filteredProducts,
            productColors,
            productSize
        ) {
            var vm = this;
            vm.categoryName = stateParams.categoryName;
            vm.filterProducts = filteredProducts;
            vm.filterProductsColors = productColors;
            vm.filterProductsSize = productSize;

            /*scope.$watch(function(){return location.search();}, function(oldquery, newquery){
                if(oldquery !== newquery && !angular.equals({}, newquery)){
                    console.log(oldquery, newquery);
                    state.go(state.current, {}, {reload: true});
                }
            });*/

            categorySrvc.applyInnerFilters().then(function(data){
                vm.filterProducts = data;
            });

            vm.applyInnerFilters = function(name, value){
                categorySrvc.applyInnerFilters(name, value).then(function(data){
                    vm.filterProducts = data;
                });
            };
        }
    ]);
})(angular.module("Meanapp"));