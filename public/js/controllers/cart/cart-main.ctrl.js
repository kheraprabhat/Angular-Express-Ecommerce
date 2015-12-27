(function(app) {
    'use strict';
    var injectParams = ['$rootScope', 'utility', 'cartSrvc', 'myAccountSrvc'];
    var CartMainCtrl = function (rootScope, utility, cartSrvc, myAccountSrvc) {
        var vm = this;

        function getAllCartItems(user){
            cartSrvc.get({username: user ? user.username : 'anonymous'}, function(items){
                vm.cartItems = items;
                utility.addStorage('cartItemsReceived', items);
                rootScope.$broadcast('cartItemsReceived');
            });
        }

        getAllCartItems(myAccountSrvc.getUser());

        rootScope.$on('authenticationcompleted', function(){
            getAllCartItems(myAccountSrvc.getUser());
        });

        vm.incrementQuantity = function(id, index) {
            if (vm.cartItems.products[index].quantity < 10) {
                cartSrvc.update({ id: id }, {quantity: +vm.cartItems.products[index].quantity + 1}, function(result){
                    if(result.status){
                        getAllCartItems(myAccountSrvc.getUser());
                    }
                });
            }
        };

        vm.decrementQuantity = function(id, index) {
            if(vm.cartItems.products[index].quantity > 1){
                cartSrvc.update({ id: id }, {quantity: vm.cartItems.products[index].quantity - 1}, function(result){
                    if(result.status){
                        getAllCartItems(myAccountSrvc.getUser());
                    }
                });
            }
        };

        vm.removeItem = function(id) {
            cartSrvc.delete({ id: id }, function(result){
                if(result.status){
                    getAllCartItems(myAccountSrvc.getUser());
                }
            });
        };
    };

    CartMainCtrl.$inject = injectParams;
    app.controller('CartMainCtrl', CartMainCtrl);
})(angular.module("Meanapp"));