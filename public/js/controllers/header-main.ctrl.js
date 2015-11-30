(function (app) {
	'use strict';
	app.controller('HeaderMainCtrl', ['utility', function(utility){
		var context = this;
		context.primaryMenu = [];
    	context.primaryMenu = utility.getPrimaryMenu().then(function(response){
    		context.primaryMenu = response.data;
    	});
    }]);    
})(angular.module("Timberland"));