(function(app) {
    'use strict';
    app.factory('myAccountSrvc', ['$http', function(http) {
        var methods = {
        	user: null,
        	setUser: function(user){
        		methods.user = user;
        	},
        	getUser: function(){
        		return methods.user;
        	},
            getPrimaryMenu: function() {
                return http.get('/categories');
            }
        };

        return methods;
    }]);
})(angular.module("Meanapp"));