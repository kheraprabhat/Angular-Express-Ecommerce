(function(app) {
    'use strict';
    app.factory('utility', ['$http', 'CONSTANT_COLORS', 'myAccountSrvc', 
        function(http, CONSTANT_COLORS, myAccountSrvc) {
        var factory = {
            getData: function(url) {
                return http.get(url).then(function(result) {
                    return result.data;
                }, function(error){
                    return error;
                });
            },

            postData: function(url, param) {
                return http.post(url, param).then(function(result) {
                    return result.data;
                }, function(error){
                    return error;
                });
            },

            queryStingFormat: function(object) {
                return '?' + Object.keys(object).reduce(function(array, property) {
                    array.push(property + '=' + encodeURIComponent(object[property]));
                    return array;
                }, []).join('&');
            },

            getColorCode: function(colorName){
                return CONSTANT_COLORS.filter(function(color){
                    return color.name === colorName;
                })[0];
            },

            cartItems: function(){
                var user = myAccountSrvc.getUser();
                var queryString = factory.queryStingFormat({
                    user: user ? user.email : 'anonymous'
                });

                return factory.getData('/cart' + queryString);
            },

            addToCart: function(object){
                var user = myAccountSrvc.getUser();
                var details = {};
                
                details.productId = object.productId;
                details.user = user ? user.email : 'anonymous';
                details.quantity = object.quantity || 1; 

                return factory.postData('/cart/addToCart', details);
            }
        };

        return factory;
    }]);
})(angular.module("Meanapp"));