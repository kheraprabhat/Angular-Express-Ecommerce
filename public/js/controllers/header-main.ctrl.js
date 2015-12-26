(function(app) {
    'use strict';
    app.controller('HeaderMainCtrl', ['$rootScope', '$scope', '$location', 'authenticationSrvc', 'utility', 'myAccountSrvc', 
        function(rootScope, scope, location, authenticationSrvc, utility, myAccountSrvc) {
        var vm = this;
        vm.primaryMenu = [];
        vm.isAuthenticated = authenticationSrvc.isLogin();
        vm.primaryMenu = utility.getData('/categories').then(function(data) {
            vm.primaryMenu = data;
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