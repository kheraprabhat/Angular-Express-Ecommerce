var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Cart = module.exports = mongoose.model('cart', new mongoose.Schema({
    "_id": ObjectId,
    "productId": ObjectId,
    "user": String,
    "quantity": String
}));

function _getCartItems(query, defaultCallback) {
    Cart.find(defaultCallback);
}

function _addToCart(query, defaultCallback) {
    Cart.find({'productId': ObjectID(query.productId)}, function(error, result) {
        if (result.length) {
            Cart.update({'productId': ObjectID(query.productId)}, {
                quantity: query.quantity
            }, function(err, numberAffected, rawResponse) {
                Cart.find({}, defaultCallback);
            });

        } else {
            var model = new Cart();
            model._id = new ObjectID();
            model.productId = ObjectID(query.productId);

            model.user = query.user;
            model.quantity = query.quantity;

            model.save(function(error, doc) {
                Cart.find({}, defaultCallback);
            });

        }
    });
}

/* simple product collection containg all products in single response */
module.exports.getCartItems = _getCartItems;
module.exports.addToCart = _addToCart;