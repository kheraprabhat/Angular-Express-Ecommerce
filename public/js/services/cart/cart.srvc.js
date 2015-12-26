(function(app) {
    'use strict';
    app.factory('cartSrvc', ['$resource', function(resource) {
        return resource('/cart/current/:id/:username', {id: '@id', username: '@username'}, {
        	update: {
		      	method: 'PUT'
		    }
        });
    }]);
})(angular.module("Meanapp"));