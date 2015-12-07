(function(app) {
    'use strict';
    app.factory('authenticationSrvc', ['$location', function(location) {
        var methods = {
            user: {
                isAuthenticated: false
            },
            changeAuthStatus: function(status) {
                methods.user.isAuthenticated = status === 'login';
            },
            redirectToLogin: function() {
                location.path('/login');
            }
        };
        return methods;
    }]);
})(angular.module("Meanapp"));