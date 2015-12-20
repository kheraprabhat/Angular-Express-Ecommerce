(function(app) {
    'use strict';
    app.controller('ProductMainCtrl', ['$stateParams', 'utility', 'selectedProduct',
        function(stateParams, utility, selectedProduct) {
            var vm = this;
            vm.selectedProduct = [];
            vm.categoryName = stateParams.categoryName;

            /* get selected product from back-end */
            vm.selectedProduct = selectedProduct[0];

            vm.addToCart = function(productId){
                utility.addToCart(productId).then(function(data){
                    console.log(data);
                });
            };
        }
    ]);
})(angular.module("Meanapp"));