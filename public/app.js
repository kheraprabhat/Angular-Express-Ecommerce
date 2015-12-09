(function(app) {
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
                        templateUrl: 'views/category/category.html',
                        resolve: {
                            selectedCategoryProducts: function(utility, $stateParams) {
                                return utility.getData('/products/' + $stateParams.categoryName);
                            },

                            getProductCount: function(utility, $stateParams) {
                                var queryString = utility.queryStingFormat({
                                    categoryId: $stateParams.categoryName,
                                    fieldName: 'brand'
                                });

                                return utility.getData('/products/getProductCount' + queryString);
                            },

                            getProductTypeCount: function(utility, $stateParams) {
                                var queryString = utility.queryStingFormat({
                                    categoryId: $stateParams.categoryName,
                                    fieldName: 'type'
                                });

                                return utility.getData('/products/getProductCount' + queryString);
                            },

                            getProductRange: function(utility, $stateParams) {
                                var queryString = utility.queryStingFormat({
                                    categoryId: $stateParams.categoryName,
                                    fieldName: 'price'
                                });

                                return utility.getData('/products/getProductRange' + queryString);
                            }
                        }
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
                        templateUrl: 'views/product/product.html',
                        resolve: {
                            selectedProduct: function(utility, $stateParams){
                                var serviceUrl = '/products/selected/' + $stateParams.categoryName + '/' + $stateParams.productId;
                                return utility.getData(serviceUrl);
                            }
                        }
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
                        controller: 'AuthenticationMainCtrl',
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
                        controller: 'AuthenticationMainCtrl',
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

    app.run(['$rootScope', '$location', 'utility', 'authenticationSrvc',
        function($rootScope, $location, utility, authenticationSrvc) {
            utility.getData('/auth/currentuser').then(function(data) {
                if (!data.status) {
                    authenticationSrvc.changeAuthStatus('login');
                }
            });
        }
    ]);

})(angular.module("Meanapp", [
    'ui.router'
]));