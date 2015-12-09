(function(app) {
    'use strict';
    app.factory('utility', ['$http', function(http) {
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
            }
        };

        return methods;
    }]);
})(angular.module("Meanapp"));