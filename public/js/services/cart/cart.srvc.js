(function(app) {
    'use strict';
    app.factory('cartSrvc', ['$resource', function(resource) {
        return resource('/cart/current/:id', {id: '@id'}, {
        	update: {
		      	method: 'PUT'
		    }
        });
    }]);
})(angular.module("Meanapp"));