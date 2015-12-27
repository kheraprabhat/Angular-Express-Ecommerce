(function(app) {
    'use strict';
    var injectParams = ['$location', '$rootScope', 'utility', 'cartSrvc', 'myAccountSrvc'];
    var CheckoutShippingCtrl = function(location, rootScope, utility, cartSrvc, myAccountSrvc){
    	var vm = this;
    	var user = myAccountSrvc.getUser();
    	vm.orderSummary = utility.getStorage('cartItemsReceived');

    	function getAllCartItems(user){
            cartSrvc.get({username: user ? user.username : 'anonymous'}, function(items){
                vm.orderSummary = items;
                utility.addStorage('cartItemsReceived', items);
                rootScope.$broadcast('cartItemsReceived');
            });
        }

        rootScope.$on('authenticationcompleted', function(){
        	var user = myAccountSrvc.getUser();
            getAllCartItems(user);
        });
    };

    CheckoutShippingCtrl.$inject = injectParams;
    app.controller('CheckoutShippingCtrl', CheckoutShippingCtrl);
})(angular.module("Meanapp"));