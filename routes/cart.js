var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var url = require('url');
var router = express.Router();

/* load utility file for common utility */
var utility = require('../utility/utility');

/* load products model */
var Cart = require('../models/cart');
var Products = require('../models/products');

/* GET users listing. */
router.get('/', function(request, response, next) {
    var query = {
        username: request.body.username
    };

    Cart.getCartItems(query, function(error, result) {
        var cartItems = [];
        var totalPrice = 0;
        result = utility.toJson(result);
        result.forEach(function(prod, index){
            Products.findOne({'_id': ObjectID(prod.productId)}, function(err, res){
                var cartItem = {};
                res = utility.toJson(res);
                cartItem.name = res.name;
                cartItem.style = res.productId;
                cartItem.price = res.price;
                cartItem.image = res.images.thumb[0];
                cartItem.quantity = prod.quantity;
                totalPrice += cartItem.quantity * cartItem.price;
                cartItems.push(cartItem);
                if(cartItems.length === result.length){
                    response.json({
                        totalItems: cartItems.length,
                        totalPrice: totalPrice,
                        products: cartItems
                    });
                }
            });
        });

        if(!result.length){
            response.json({
                totalItems: cartItems.length,
                totalPrice: totalPrice,
                products: cartItems
            });
        }
    });
});

router.post('/addToCart', function(request, response, next) {
    var query = {
        username: request.body.username,
        productId: request.body.productId,
        quantity: request.body.quantity
    };


    Cart.addToCart(query, function(error, result) {
        var cartItems = [];
        var totalPrice = 0;
        result = utility.toJson(result);
        result.forEach(function(prod, index){
            Products.findOne({'_id': ObjectID(prod.productId)}, function(err, res){
                var cartItem = {};
                res = utility.toJson(res);
                cartItem.name = res.name;
                cartItem.style = res.productId;
                cartItem.price = res.price;
                cartItem.image = res.images.thumb[0];
                cartItem.quantity = prod.quantity;
                totalPrice += cartItem.quantity * cartItem.price;
                cartItems.push(cartItem);
                if(result.length === cartItems.length){
                    response.json({
                        totalItems: cartItems.length,
                        totalPrice: totalPrice,
                        products: cartItems
                    });
                }
            });
        });

        if (!result.length) {
            response.json({
                totalItems: cartItems.length,
                totalPrice: totalPrice,
                products: cartItems
            });
        }
    });
});

module.exports = router;