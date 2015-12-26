(function(app) {
    'use strict';
    app.controller('MyAccountMainCtrl', ['$http', '$location', 'myAccountSrvc', 'currentuser',
        function(http, location, myAccountSrvc, currentuser) {
            var vm = this;
            if(currentuser.status){
                vm.loggeduser = currentuser;
                myAccountSrvc.setUser(currentuser);
            } else {
                location.path('/login');    
            }
        }
    ]);
})(angular.module("Meanapp"));