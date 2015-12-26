(function(app) {
    'use strict';
    app.controller('HeaderMainCtrl', ['$rootScope', '$scope', '$location', 'authenticationSrvc', 
            'utility', 'myAccountSrvc', 'cartSrvc', 
        function(rootScope, scope, location, authenticationSrvc, utility, myAccountSrvc, cartSrvc) {
        var vm = this;
        vm.primaryMenu = [];
        vm.isAuthenticated = authenticationSrvc.isLogin();
        vm.primaryMenu = utility.getData('/categories').then(function(data) {
            vm.primaryMenu = data;
        });

        rootScope.$on('authenticationcompleted', function(){
            var user = myAccountSrvc.getUser();        
            cartSrvc.get({username: user ? user.username : 'anonymous'}, function(items){
                vm.cartItems = items;
                utility.addStorage('cartItemsReceived', items);
                rootScope.$broadcast('cartItemsReceived');
            });
        });

        var user = myAccountSrvc.getUser();        
        cartSrvc.get({username: user ? user.username : 'anonymous'}, function(items){
            vm.cartItems = items;
            utility.addStorage('cartItemsReceived', items);
            rootScope.$broadcast('cartItemsReceived');
        });

        rootScope.$on('cartItemsReceived', function(){
            rootScope.cartItems = utility.getStorage('cartItemsReceived');
        });

        vm.logout = function() {
        	utility.getData('/auth/logout').then(function(data){
        		if(data === 'OK'){
        			authenticationSrvc.changeAuthStatus('logout');
                    myAccountSrvc.setUser(null);
        			location.path('/');
        		} else { /* logout failed:: todo action */ }
        	});
        };

        scope.$watch(function(){return authenticationSrvc.isLogin();}, function(a, b){
        	vm.isAuthenticated = authenticationSrvc.isLogin();
        });
    }]);
})(angular.module("Meanapp"));