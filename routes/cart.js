var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var url = require('url');
var router = express.Router();

/* load utility file for common utility */
var utility = require('../utility/utility');

/* load products model */
var Cart = require('../models/cart');

/* GET users listing. */
router.get('/', function(request, response, next) {
    Cart.getCartItems(function(error, result) {
        response.json(result);
    });
});

router.post('/addToCart', function(request, response, next) {
    var query = {
        user: request.body.user || 'anonymous',
        productId: request.body.productId
    };

    Cart.addToCart(query, function(error, result) {
        response.json({
            success: true,
            status: result._id ? 'insert' : 'update',
            message: 'Product added in cart items.'
        });
    });
});

module.exports = router;