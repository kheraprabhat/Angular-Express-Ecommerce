(function(app) {
    'use strict';
    app.directive('colorButton', ['$location', '$timeout', function(location, timeout) {
    	return {
            restrict: 'A',
            link: function(scope, elem, attr){
                var search = location.search();
                timeout(function(){
                    if(search.color === attr['colorButton']){
                        angular.element('[color-button="' + search.color + '"]').addClass('selected');
                    }
                }, 0);
                
                angular.element(elem).on('click', function(){
                    angular.element(this).siblings('[color-button]').removeClass('selected');
                    angular.element(this).addClass('selected');
                });
            }
        };
    }]);
})(angular.module("Meanapp"));