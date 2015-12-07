(function(app) {
    'use strict';
    app.factory('giftcardsSrvc', ['$http', function(http) {
        var methods = {
            getPrimaryMenu: function() {
                return http.get('/categories');
            }
        };

        return methods;
    }]);
})(angular.module("Meanapp"));