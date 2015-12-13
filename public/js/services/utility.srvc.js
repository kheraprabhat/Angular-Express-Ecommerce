(function(app) {
    'use strict';
    app.factory('utility', ['$http', 'CONSTANT_COLORS', function(http, CONSTANT_COLORS) {
        var methods = {
            getData: function(url) {
                return http.get(url).then(function(result) {
                    return result.data;
                }, function(error){
                    return error;
                });
            },

            postData: function(url) {
                return http.post(url).then(function(result) {
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
            }
        };

        return methods;
    }]);
})(angular.module("Meanapp"));