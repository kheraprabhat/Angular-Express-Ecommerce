(function(app) {
    'use strict';
    var injectParams = ['$location', '$rootScope', 'utility', 'cartSrvc', 'myAccountSrvc'];
    var CheckoutMainCtrl = function(location, rootScope, utility, cartSrvc, myAccountSrvc){
    	var vm = this;
    	var user = myAccountSrvc.getUser();

    	function getAllCartItems(user){
            cartSrvc.get({username: user ? user.username : 'anonymous'}, function(items){
                vm.orderSummary = items;
                utility.addStorage('cartItemsReceived', items);
                rootScope.$broadcast('cartItemsReceived');
            });
        }

        rootScope.$on('authenticationcompleted', function(){
        	var user = myAccountSrvc.getUser();
        	if(user){
	    		location.path('/checkout/shipping');
	    	}
	    	
            getAllCartItems(user);
        });

    	if(user){
    		location.path('/checkout/shipping');
    	}
    };

    CheckoutMainCtrl.$inject = injectParams;
    app.controller('CheckoutMainCtrl', CheckoutMainCtrl);
})(angular.module("Meanapp"));