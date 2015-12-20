(function(app) {
    "use strict";
    app.config(['$controllerProvider',
        '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
        '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($controllerProvider,
            $compileProvider, $filterProvider, $provide, $httpProvider,
            $stateProvider, $urlRouterProvider, $locationProvider) {
            
            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

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
                        controllerAs: 'vm',
                        templateUrl: 'views/category/category.html',
                        resolve: {
                            products: function(categorySrvc, $stateParams) {
                                return categorySrvc.products($stateParams);
                            },

                            productLength: function(categorySrvc, $stateParams) {
                                return categorySrvc.productLength($stateParams);
                            },

                            productTypeLength: function(categorySrvc, $stateParams) {
                                return categorySrvc.productTypeLength($stateParams);
                            },

                            productRange: function(categorySrvc, $stateParams) {
                                return categorySrvc.productRange($stateParams);
                            }
                        }
                    }
                },

                data: {
                    pageTitle: 'Product Category'
                }
            })

            .state('/shop/:categoryName/:filterKeyName/:filterKeyValue', {
                url: '/shop/:categoryName/:filterKeyName/:filterKeyValue',

                views: {
                    "main": {
                        controller: 'CategoryProductFilterCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'views/category/category-product-filter.html',
                        resolve: {
                            filteredProducts: function(categorySrvc, $stateParams) {
                                return categorySrvc.filteredProducts($stateParams);
                            },

                            productColors: function(categorySrvc, $stateParams) {
                                return categorySrvc.productColors($stateParams);
                            },

                            productSize: function(categorySrvc, $stateParams) {
                                return categorySrvc.productSize($stateParams);
                            }
                        }
                    }
                },

                data: {
                    pageTitle: 'Product Category'
                }
            })

            .state('/shop/:categoryName/:filterKeyName/:filterKeyValue/subfilter', {
                url: '/shop/:categoryName/:filterKeyName/:filterKeyValue/subfilter',

                views: {
                    "main": {
                        controller: 'CategoryProductFilterCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'views/category/category-product-filter.html',
                        resolve: {
                            innerFilters: function(categorySrvc, $stateParams, $state){
                                return categorySrvc.innerFilters($stateParams);
                            },

                            filteredProducts: function(categorySrvc, $stateParams) {
                                return categorySrvc.filteredProducts($stateParams);
                            },

                            productColors: function(categorySrvc, $stateParams) {
                                return categorySrvc.productColors($stateParams);
                            },

                            productSize: function(categorySrvc, $stateParams) {
                                return categorySrvc.productSize($stateParams);
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
                        controllerAs: 'vm',
                        templateUrl: 'views/product/product.html',
                        resolve: {
                            selectedProduct: function(productSrvc, $stateParams){
                                return productSrvc.selectedProduct($stateParams);
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
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
                        controllerAs: 'vm',
                        templateUrl: 'views/blogs/blogs.html'
                    }
                },

                data: {
                    pageTitle: 'Blogs'
                }
            });
        }
    ]);
})(angular.module("Meanapp"));