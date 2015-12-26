(function(app) {
    'use strict';
    app.controller('CartMainCtrl', ['$rootScope', 'utility', 'cartSrvc', function(rootScope, utility, cartSrvc) {
        var vm = this;
        
        cartSrvc.query(function(items){
            vm.cartItems = items[0];
            utility.addStorage('cartItemsReceived', items[0]);
            rootScope.$broadcast('cartItemsReceived');
        });

        vm.incrementQuantity = function(id, index) {
            if (vm.cartItems.products[index].quantity < 10) {
                cartSrvc.update({ id: id }, {quantity: +vm.cartItems.products[index].quantity + 1}, function(result){
                    if(result.status){
                        cartSrvc.query(function(items){
                            vm.cartItems = items[0];
                            utility.addStorage('cartItemsReceived', items[0]);
                            rootScope.$broadcast('cartItemsReceived');
                        });
                    }
                });
            }
        };

        vm.decrementQuantity = function(id, index) {
            if(vm.cartItems.products[index].quantity > 1){
                cartSrvc.update({ id: id }, {quantity: vm.cartItems.products[index].quantity - 1}, function(result){
                    if(result.status){
                        cartSrvc.query(function(items){
                            vm.cartItems = items[0];
                            utility.addStorage('cartItemsReceived', items[0]);
                            rootScope.$broadcast('cartItemsReceived');
                        });
                    }
                });
            }
        };

        vm.removeItem = function(id) {
            cartSrvc.delete({ id: id }, function(result){
                if(result.status){
                    cartSrvc.query(function(items){
                        vm.cartItems = items[0];
                        utility.addStorage('cartItemsReceived', items[0]);
                        rootScope.$broadcast('cartItemsReceived');
                    });
                }
            });
        };
    }]);
})(angular.module("Meanapp"));