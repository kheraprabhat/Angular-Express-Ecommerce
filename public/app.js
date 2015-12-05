;(function(app) {
    "use strict";
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

                data: {
                    pageTitle: 'Checkout'
                }
            })

            .state('/login', {
                url: '/login',

                views: {
                    "main": {
                        controller: 'AuthenticationLoginCtrl',
                        controllerAs: 'login',
                        templateUrl: 'views/authentication/login.html'
                    }
                },

                data: {
                    pageTitle: 'Login'
                }
            })

            .state('/signup', {
                url: '/signup',

                views: {
                    "main": {
                        controller: 'AuthenticationSignupCtrl',
                        controllerAs: 'signup',
                        templateUrl: 'views/authentication/signup.html'
                    }
                },

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

                data: {
                    pageTitle: 'Blogs'
                }
            });
        }
    ]);

})(angular.module("Meanapp", [
    'ui.router'
]));