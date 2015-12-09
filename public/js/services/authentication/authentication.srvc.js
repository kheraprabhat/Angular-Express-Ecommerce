(function(app) {
    'use strict';
    app.factory('authenticationSrvc', ['$location', function(location) {
        var methods = {
            user: {
                isAuthenticated: false
            },
            isLogin: function(){
                return methods.user.isAuthenticated;
            },
            changeAuthStatus: function(status) {
                console.log('test');
                methods.user.isAuthenticated = status === 'login';
            },
            redirectToLogin: function() {
                location.path('/login');
            }
        };
        return methods;
    }]);
})(angular.module("Meanapp"));