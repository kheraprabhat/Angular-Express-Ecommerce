(function(app) {
    'use strict';
    app.controller('ProductMainCtrl', ['$rootScope', '$stateParams', 'utility', 'selectedProduct',
        function(rootScope, stateParams, utility, selectedProduct) {
            var vm = this;
            vm.selectedProduct = [];
            vm.productQuantity = 1;
            vm.categoryName = stateParams.categoryName;

            /* get selected product from back-end */
            vm.selectedProduct = selectedProduct[0];

            vm.addToCart = function(productId){
                var object = {
                    productId: productId,
                    quantity: vm.productQuantity
                };

                utility.addToCart(object).then(function(data){
                    rootScope.cartItems = data;
                });
            };
        }
    ]);
})(angular.module("Meanapp"));