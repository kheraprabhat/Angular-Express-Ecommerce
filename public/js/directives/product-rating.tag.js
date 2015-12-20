(function(app) {
    'use strict';
    app.directive('productRating', [function() {
    	return {
            restrict: 'A',
            link: function(scope, elem, attr){
                var width = 17;
                angular.element(elem).css('width', width * attr['productRating']);
            }
        };
    }]);
})(angular.module("Meanapp"));