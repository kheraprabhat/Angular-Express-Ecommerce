(function(app) {
    'use strict';
    app.directive('sizeDropdown', ['$location', '$timeout', function(location, timeout) {
    	return {
            restrict: 'A',
            link: function(scope, elem, attr){
                var search = location.search();
                timeout(function(){
                    if(search.size === attr['sizeDropdown']){
                        angular.element('[size-dropdown="' + search.size + '"]').parent().val(search.size);
                    }
                }, 0);
            }
        };
    }]);
})(angular.module("Meanapp"));