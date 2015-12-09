(function(app) {
    'use strict';
    app.controller('MyAccountMainCtrl', ['$http', '$location', 'myAccountSrvc',
        function(http, location, myAccountSrvc) {
            var vm = this;
            http.get('/auth/currentuser').
            success(function(data) {
                vm.loggeduser = data;
            }).
            error(function() {
                location.path('/login');
            });
        }
    ]);
})(angular.module("Meanapp"));