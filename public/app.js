;(function(app) {
    "use strict";

    function onlyLoggedIn($location,$q,authenticationSrvc) {
        var deferred = $q.defer();
        if (authenticationSrvc.isLogin()) {
            deferred.resolve();
        } else {
            console.log('okay');
            $location.url('/login');
        }
        return deferred.promise;
    }

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                url: '/',

                views: {
                    "main": {
                        controller: 'MeanappMainCtrl',
                        controllerAs: 'global',
                        templateUrl: 'views/home.html'
                    }
                },

                resolve: {
                    loggedIn: onlyLoggedIn
                },

                data: {
                    pageTitle: 'Home Page'
                }
            })

            .state('/shop/:categoryName', {
                url: '/shop/:categoryName',

                views: {
                    "main": {
                        controller: 'CategoryMainCtrl',
                        controllerAs: 'category',
                        templateUrl: 'views/category/category.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Product Category'
                }
            })

            .state('/shop/:categoryName/:productId', {
                url: '/shop/:categoryName/:productId',

                views: {
                    "main": {
                        controller: 'ProductMainCtrl',
                        controllerAs: 'product',
                        templateUrl: 'views/product/product.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Product Items'
                }
            })

            .state('/giftcards', {
                url: '/giftcards',

                views: {
                    "main": {
                        controller: 'GiftCardsMainCtrl',
                        controllerAs: 'giftcards',
                        templateUrl: 'views/gift-cards.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Gift Cards'
                }
            })

            .state('/findstore', {
                url: '/findstore',

                views: {
                    "main": {
                        controller: 'FindStoreMainCtrl',
                        controllerAs: 'findstore',
                        templateUrl: 'views/find-store.html'
                    }
                },

                data: {
                    pageTitle: 'Find a Store'
                }
            })

            .state('/wishlist', {
                url: '/wishlist',

                views: {
                    "main": {
                        controller: 'WishListMainCtrl',
                        controllerAs: 'wishlist',
                        templateUrl: 'views/wish-list.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Wish list'
                }
            })

            .state('/myaccount', {
                url: '/myaccount',

                views: {
                    "main": {
                        controller: 'MyAccountMainCtrl',
                        controllerAs: 'myaccount',
                        templateUrl: 'views/my-account.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'My Account'
                }
            })

            .state('/cart', {
                url: '/cart',

                views: {
                    "main": {
                        controller: 'CartMainCtrl',
                        controllerAs: 'cart',
                        templateUrl: 'views/cart/cart.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Cart items'
                }
            })

            .state('/checkout', {
                url: '/checkout',

                views: {
                    "main": {
                        controller: 'CheckoutMainCtrl',
                        controllerAs: 'checkout',
                        templateUrl: 'views/checkout/checkout.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Checkout'
                }
            })
            
            .state('/checkout/shipping', {
                url: '/checkout/shipping',

                views: {
                    "main": {
                        controller: 'CheckoutShippingCtrl',
                        controllerAs: 'checkoutShipping',
                        templateUrl: 'views/checkout/shipping.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Checkout'
                }
            })



            .state('/checkout/payment', {
                url: '/checkout/payment',

                views: {
                    "main": {
                        controller: 'CheckoutPaymentCtrl',
                        controllerAs: 'checkoutPayment',
                        templateUrl: 'views/checkout/payment.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Checkout'
                }
            })

            .state('/login', {
                url: '/login',

                views: {
                    "main": {
                        controller: 'AuthenticationMainCtrl',
                        controllerAs: 'login',
                        templateUrl: 'views/authentication/login.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Login'
                }
            })

            .state('/signup', {
                url: '/signup',

                views: {
                    "main": {
                        controller: 'AuthenticationMainCtrl',
                        controllerAs: 'signup',
                        templateUrl: 'views/authentication/signup.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Register'
                }
            })

            .state('/blogs', {
                url: '/blogs',

                views: {
                    "main": {
                        controller: 'BlogsMainCtrl',
                        controllerAs: 'blogs',
                        templateUrl: 'views/blogs/blogs.html'
                    }
                },

                resolve: { loggedIn: onlyLoggedIn },

                data: {
                    pageTitle: 'Blogs'
                }
            });
        }
    ]);

    app.run(['$rootScope', '$location', 'authenticationSrvc',
        function($rootScope, $location, authenticationSrvc) {
            //Client-side security. Server-side framework MUST add it's 
            //own security as well since client-based security is easily hacked
            /*$rootScope.$on("$locationChangeStart", function(event, next, current) {
                if (next && next.$$route && next.$$route.secure) {
                    if (!authenticationSrvc.user.isAuthenticated) {
                        $rootScope.$evalAsync(function() {
                            authenticationSrvc.redirectToLogin();
                        });
                    }
                }
            });*/

        }
    ]);

})(angular.module("Meanapp", [
    'ui.router'
]));