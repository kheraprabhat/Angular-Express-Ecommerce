(function(app) {
    'use strict';
    app.filter('encodeURIComponent', [function() {
        return window.encodeURIComponent;
    }]);
})(angular.module("Meanapp"));