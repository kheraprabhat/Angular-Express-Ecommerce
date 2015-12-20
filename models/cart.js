var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Cart = module.exports = mongoose.model('cart', new mongoose.Schema({
    "_id": ObjectId,
    "productId": ObjectId,
    "user": String
}));

/* simple product collection containg all products in single response */
module.exports.getCartItems = function(defaultCallback) {
    Cart.find(defaultCallback);
};

module.exports.addToCart = function(query, defaultCallback) {
    Cart.find({'productId': ObjectID(query.productId)}, function(error, result){
        if(!result.length){
            var model = new Cart();
            model._id = new ObjectID();
            model.productId = ObjectID(query.productId);
            model.user = query.user;
            model.save(function(error, doc){
                defaultCallback(error, doc);
            });
        } else {
            defaultCallback(null, {});
        }
    });
};