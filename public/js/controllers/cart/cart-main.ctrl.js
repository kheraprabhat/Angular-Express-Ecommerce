(function(app) {
    'use strict';
    app.controller('CartMainCtrl', ['utility', function(utility) {
    	var vm = this;
    	vm.cartItemQuantity = 1;
    	utility.cartItems().then(function(data){
            vm.cartItems = data;
        });
    }]);
})(angular.module("Meanapp"));