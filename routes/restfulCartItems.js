var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var url = require('url');
var router = express.Router();

/* load utility file for common utility */
var utility = require('../utility/utility');

/* load products model */
var Cart = require('../models/cart');
var Products = require('../models/products');

exports.index = function(request, response) {
};

exports.new = function(req, res) {
    res.send('new forum');
};

exports.create = function(req, res) {
    res.send('create forum');
};

exports.show = function(request, response) {
    Cart.find({'username': request.params.current}, function(err, result) {
        var cartItems = [];
        var totalPrice = 0;
        result = utility.toJson(result);
        result.forEach(function(prod, index) {
            Products.findOne({
                '_id': ObjectID(prod.productId)
            }, function(err, res) {
                var cartItem = {};
                res = utility.toJson(res);
                cartItem.name = res.name;
                cartItem.style = res.productId;
                cartItem.price = res.price;
                cartItem.image = res.images.thumb[0];
                cartItem.quantity = prod.quantity;
                cartItem._id = prod._id;
                totalPrice += cartItem.quantity * cartItem.price;
                cartItems.push(cartItem);
                if (cartItems.length === result.length) {
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
};

exports.edit = function(req, res) {
    res.send('edit forum ' + req.params.forum);
};

exports.update = function(request, response) {
    Cart.update({
        '_id': ObjectID(request.params.current)
    }, {
        quantity: request.body.quantity
    }, function(err, numberAffected, rawResponse) {
        response.json({
            status: true,
            message: 'Item successfully updated.'
        });
    });
};

exports.destroy = function(request, response) {
    Cart.remove({
        '_id': ObjectID(request.params.current)
    }, function(err) {
        if (err) {
            response.json({
                status: false,
                message: 'Not able to remove.'
            });
        } else {
            response.json({
                status: true,
                message: 'Item successfully removed.'
            });
        }
    });
};